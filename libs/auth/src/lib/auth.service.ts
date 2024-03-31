import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from, lastValueFrom } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { AuthTokenInterceptor } from './interceptor/auth-token.interceptor';
import { ErrorDialogInterceptor } from './interceptor/error-dialog.interceptor';
import { environment } from '@issp/common/environments';
import { API, AuthSession, LocalStorageKey, URLS } from '@issp/common';
import ls from 'localstorage-slim';
import { token } from './token.signal';
import { Ability } from '@casl/ability';
import { UserRole } from '@prisma/client';
import { UntilDestroy } from '@ngneat/until-destroy';
const { api } = environment;

export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  online: boolean;
  isSocial: boolean;
}

@UntilDestroy({ checkProperties: true })
@Injectable({
  providedIn: 'root',
})
export class AuthService {
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
    private ability: Ability
  ) {}

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
      .delete<AuthSession>(`${api}/auth/logout-from-all-devices`)
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

  userHasRole(role: string | Pick<UserRole, 'name'>[][]) {
    // if (role) {
    //   if (typeof role === 'string')
    //     return this.#userRoles.some((r) => r === role);
    //   else return this.#userRoles.some((r) => role.includes(r));
    // }
    return false;
  }

  userNotInRole(role: string | string[]) {
    // if (role) {
    //   if (typeof role === 'string')
    //     return !this.#userRoles.some((r) => r === role);
    //   return this.#userRoles.filter((r) => role.includes(r)).length === 0;
    // }
    return true;
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

    if (
      !this.rolesEqual(this.#userRoles, authSession.roles) ||
      this.#userRoles === null ||
      this.#userRoles === undefined
    ) {
      this.#userRoles = authSession.roles;
      this.#userRoles$.next([...this.#userRoles]);
    }

    if (!this.#loggedIn) {
      this.#loggedIn = true;
      this.#loggedIn$.next(true);
    }

    // this.startExchangeInterval();
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

  rolesEqual(
    a: string | Pick<UserRole, 'name'>[] | null | undefined,
    b: string | Pick<UserRole, 'name'>[] | null | undefined
  ) {
    let compareA: Pick<UserRole, 'name'>[];
    let compareB: Pick<UserRole, 'name'>[];

    if (Array.isArray(a)) compareA = [...a];
    // else if (typeof a === 'string') compareA = [a];
    else if (a === null || a === undefined) compareA = [];
    else throw new Error(`'a' is not a valid type for comparison`);

    if (Array.isArray(b)) compareB = [...b];
    // else if (typeof b === 'string') compareB = [b];
    else if (b === null || b === undefined) compareB = [];
    else throw new Error(`'b' is not a valid type for comparison`);

    if (compareA.length !== compareB.length) return false;

    compareA.sort();
    compareB.sort();

    for (let i = 0; i < compareA.length; i++) {
      if (compareA[i] !== compareB[i]) return false;
    }

    return true;
  }
}
