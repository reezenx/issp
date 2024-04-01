import { Ability } from '@casl/ability';
import { AbilityRule, Environment } from '@issp/common';
import { API, AuthSession, LocalStorageKey, URLS } from '@issp/common';
import { AuthTokenInterceptor } from './interceptor/auth-token.interceptor';
import {
  BehaviorSubject,
  from,
  interval,
  lastValueFrom,
  Subscription,
  throwError,
  timer,
} from 'rxjs';
import { ErrorDialogInterceptor } from './interceptor/error-dialog.interceptor';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { mergeMap, retry, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { token } from './token.signal';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Role, User, UserRole } from '@prisma/client';
import ls from 'localstorage-slim';
import { MatSnackBar } from '@angular/material/snack-bar';

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  #exchangeIntervalSubscription?: Subscription;
  #userId: AuthSession['userId'] | null = null;
  get userId(): AuthSession['userId'] | null {
    return this.#userId;
  }

  #user$ = new BehaviorSubject<User>(null);
  get user(): User {
    return this.#user$.getValue();
  }

  #loggedIn = false;
  get loggedIn() {
    return this.#loggedIn;
  }

  #loggedIn$ = new BehaviorSubject(false);
  get loggedIn$() {
    return this.#loggedIn$.asObservable();
  }

  #accountInfo$;
  get accountInfo$() {
    return this.#accountInfo$;
  }

  #userRoles: Pick<UserRole, 'name'>[] = [];
  get userRoles() {
    return this.#userRoles;
  }

  #userRoles$ = new BehaviorSubject<Pick<UserRole, 'name'>[]>([]);
  get userRoles$() {
    return this.#userRoles$.asObservable();
  }

  get isAuthenticated(): boolean {
    return this.user != null;
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    public ability: Ability,
    private env: Environment,
    private snackBar: MatSnackBar
  ) {
    if (this.validSession) {
      try {
        const roles = ls.get<Pick<UserRole, 'name'>[]>(LocalStorageKey.roles, {
          decrypt: true,
        });
        this.#userRoles = roles ? roles : [];
        this.#userRoles$.next([...this.#userRoles]);
        this.#loggedIn = roles ? true : false;
        this.#loggedIn$.next(this.#loggedIn);
        this.#userId = ls.get(LocalStorageKey.userId, { decrypt: true });

        const rules: Array<AbilityRule> | null = ls.get(LocalStorageKey.rules, {
          decrypt: true,
        });
        if (Array.isArray(rules)) this.ability.update(rules);
        this.redirectToUserHomePage();

        switch (env.auth.exchangeStrategy) {
          case 'app-load':
            // this.exchangeToken();
            break;
          case 'efficient':
            if (
              !this.rememberMe &&
              this.sessionTimeRemaining <= env.auth.jwtExchangeInterval
            ) {
              this.exchangeToken();
            } else if (
              this.rememberMe &&
              this.sessionTimeRemaining <= env.auth.rememberMeExchangeThreshold
            ) {
              this.exchangeToken();
            }
            break;
        }

        // this.startExchangeInterval();
      } catch (error) {
        console.error('AuthService failed to initialize', error);
        this.logout();
      }
    } else {
      this.snackBar.open('Session Expired!', 'Ok', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 5000,
      });
      this.clearSession();
    }
  }

  login(user: Partial<User>) {
    return this.http
      .post<AuthSession>(`${API.BASE}${API.AUTH.LOGIN}`, user)
      .pipe(mergeMap((authSession) => this.setSessionTokens(authSession)));
  }

  register(user: Partial<User>) {
    return this.http
      .post<AuthSession>(`${API.BASE}${API.AUTH.REGISTER}`, user)
      .pipe(mergeMap((authSession) => this.setSessionTokens(authSession)));
  }

  getProfile() {
    return this.http
      .get<User>(`${API.BASE}${API.AUTH.ME}`, {
        headers: {
          [ErrorDialogInterceptor.skipHeader]: 'true',
        },
      })
      .pipe(tap((user) => this.#user$.next(user)));
  }

  loginWithRefreshToken() {
    return this.http
      .post<AuthSession>(
        `${API.BASE}${API.AUTH.REFRESH_TOKEN}`,
        {
          refreshToken: this.getRefreshToken(),
        },
        {
          headers: {
            [AuthTokenInterceptor.skipHeader]: 'true',
          },
        }
      )
      .pipe(mergeMap((authSession) => this.setSessionTokens(authSession)));
  }

  logoutFromAllDevices() {
    return this.http
      .delete<AuthSession>(`${API.BASE}${API.AUTH.LOGOUT_ALL}`)
      .pipe(
        mergeMap((authSession) => this.setSessionTokens(authSession))
        // tap(() => this.subscriptionService.requestSubscription())
      );
  }

  async setSessionTokens(response: AuthSession) {
    this.setRefreshToken(response.refreshToken);
    return this.setAuthToken(response);
  }

  getAccessToken() {
    return ls.get(LocalStorageKey.accessToken, { decrypt: true });
  }

  async setAuthToken(session: AuthSession) {
    this.setSession(session);
    return lastValueFrom(this.getProfile());
  }

  getRefreshToken() {
    return ls.get(LocalStorageKey.refreshToken, { decrypt: true });
  }

  setRefreshToken(token: string) {
    ls.set(LocalStorageKey.refreshToken, token, { encrypt: true });
  }

  getLoginCallbackUrl() {
    return ls.get('loginCallbackUrl');
  }

  setLoginCallbackUrl(url: string) {
    ls.set('loginCallbackUrl', url);
  }

  async redirectToCallback() {
    const url = this.getLoginCallbackUrl() ?? '/';
    const output = await this.router.navigate([url]);

    this.setLoginCallbackUrl(null);

    return output;
  }

  logout() {
    this.clearSession();
    return from(this.router.navigate([URLS.AUTH.LOGIN]));
  }

  hasRole(role: Role | Role[]) {
    return this.userHasRole(role);
  }

  userHasRole(role: string | string[]) {
    if (role) {
      if (typeof role === 'string')
        return this.#userRoles.some((r) => r.name === role);
      else return this.#userRoles.some((r) => role.includes(r.name));
    }
    return false;
  }

  hasNoRole(role: Role | Role[]) {
    return this.userNotInRole(role);
  }

  userNotInRole(role: string | string[]) {
    if (role) {
      if (typeof role === 'string')
        return !this.#userRoles.some((r) => r.name === role);
      return this.#userRoles.filter((r) => role.includes(r.name)).length === 0;
    }
    return true;
  }

  private get rememberMe() {
    return ls.get<boolean>(LocalStorageKey.rememberMe);
  }

  private get validSession(): boolean {
    return this.sessionTimeRemaining > 0;
  }

  private get sessionTimeRemaining(): number {
    const expiresOn = ls.get<number>(LocalStorageKey.sessionExpiresOn);
    if (!expiresOn) return 0;

    const timeRemaining = expiresOn - Date.now();

    if (timeRemaining <= 0) return 0;
    else return timeRemaining;
  }

  setSession(authSession: AuthSession) {
    ls.set(LocalStorageKey.userId, authSession.userId, { encrypt: true });
    ls.set(LocalStorageKey.accessToken, authSession.accessToken, {
      encrypt: true,
    });
    ls.set(LocalStorageKey.refreshToken, authSession.refreshToken, {
      encrypt: true,
    });
    ls.set(
      LocalStorageKey.sessionExpiresOn,
      Date.now() + authSession.expiresIn * 1000
    );
    ls.set(LocalStorageKey.rememberMe, authSession.rememberMe);
    ls.set(LocalStorageKey.roles, authSession.roles, { encrypt: true });
    ls.set(LocalStorageKey.rules, authSession.rules, { encrypt: true });

    this.#userId = authSession.userId;
    this.ability.update(authSession.rules);
    this.#userRoles = authSession.roles;
    this.#userRoles$.next([...this.#userRoles]);

    if (!this.#loggedIn) {
      this.#loggedIn = true;
      this.#loggedIn$.next(true);
    }
    this.redirectToUserHomePage();
    // this.startExchangeInterval();
  }

  redirectToUserHomePage() {
    if (this.loggedIn && this.getLoginCallbackUrl() === null) {
      if (this.hasRole(['PLANNER', 'SUPER_ADMIN'])) {
        this.router.navigate([URLS.USER.ACCOUNT]);
      }

      if (this.hasRole(['ADMIN'])) {
        this.router.navigate([URLS.ADMIN.DASHBOARD]);
      }
    }
  }

  clearSession() {
    ls.remove(LocalStorageKey.userId);
    ls.remove(LocalStorageKey.accessToken);
    ls.remove(LocalStorageKey.refreshToken);
    ls.remove(LocalStorageKey.sessionExpiresOn);
    ls.remove(LocalStorageKey.rememberMe);
    ls.remove(LocalStorageKey.roles);
    ls.remove(LocalStorageKey.rules);
    sessionStorage.clear();

    this.ability.update([]);
    token.set(null);
    this.#user$.next(null);
    this.#userRoles = [];
    this.#userRoles$.next([]);
    this.#loggedIn = false;
    this.#loggedIn$.next(false);
  }

  private exchangeToken() {
    this.http
      .post<AuthSession>(
        `${API.BASE}${API.AUTH.REFRESH_TOKEN}`,
        {
          refreshToken: this.getRefreshToken(),
        },
        {
          headers: {
            [AuthTokenInterceptor.skipHeader]: 'true',
          },
        }
      )
      .pipe(
        retry({
          delay: retryStrategy({
            excludeStatusCodes: [
              'FORBIDDEN',
              'UNAUTHENTICATED',
              'INTERNAL_SERVER_ERROR',
            ],
            delay: this.env.auth.retryExchangeTokenDelay,
          }),
        })
      )
      .subscribe({
        next: (authSession) => {
          this.setSession(authSession);
          if (!this.env.production) console.log('Exchanged token');
        },
        error: (error: Error) => {
          this.logout();
          console.error('Exchange token failed', error);
        },
      });
  }

  private startExchangeInterval() {
    if (!this.rememberMe && !this.#exchangeIntervalSubscription) {
      this.#exchangeIntervalSubscription = interval(
        this.env.auth.jwtExchangeInterval
      ).subscribe(() => {
        if (this.validSession) this.exchangeToken();
        else this.logout();
      });
    }
  }

  private stopExchangeInterval() {
    if (this.#exchangeIntervalSubscription) {
      this.#exchangeIntervalSubscription.unsubscribe();
      this.#exchangeIntervalSubscription = undefined;
    }
  }
}

function retryStrategy({
  maxAttempts = Infinity,
  delay = 5000,
  excludeStatusCodes = [],
}: {
  maxAttempts?: number;
  delay?: number;
  excludeStatusCodes?: string[];
}) {
  return (error: Error, retryCount: number) => {
    const excludedStatusFound = !!excludeStatusCodes.find(
      (exclude) => exclude === error.message
    );

    if (retryCount > maxAttempts || excludedStatusFound) {
      return throwError(() => error);
    }

    console.warn(
      `Exchange token attempt ${retryCount}. Retrying in ${Math.round(
        delay / 1000
      )}s`,
      error
    );

    return timer(delay);
  };
}
