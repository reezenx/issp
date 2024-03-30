import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, from } from 'rxjs';
import { mergeMap, tap } from 'rxjs/operators';
import { AuthTokenInterceptor } from '../interceptor/auth-token.interceptor';
import { ErrorDialogInterceptor } from '../interceptor/error-dialog.interceptor';
import { environment } from '@issp/common/environments';
import { API, AuthSession, LocalStorageKey, URLS } from '@issp/common';
import ls from 'localstorage-slim';
import { token } from '../token.signal';
import { Ability } from '@casl/ability';
const { api } = environment;

export interface TokenResponse {
  accessToken: string;
  refreshToken: string;
}

export interface User {
  _id: string;
  username: string;
  password: string;
  email: string;
  online: boolean;
  isSocial: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
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

  #userRoles: string[] = [];
  get userRoles() {
    return this.#userRoles;
  }

  #userRoles$ = new BehaviorSubject<string[]>([]);
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
      .post<TokenResponse>(`${API.BASE}${API.AUTH.LOGIN}`, user)
      .pipe(mergeMap((response) => this.setTokens(response)));
  }

  register(user: Partial<User>) {
    return this.http
      .post<TokenResponse>(`${api}/auth/register`, user)
      .pipe(mergeMap((response) => this.setTokens(response)));
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
      .post<TokenResponse>(
        `${api}/auth/refresh-token`,
        {
          refreshToken: this.getRefreshToken(),
        },
        {
          headers: {
            [AuthTokenInterceptor.skipHeader]: 'true',
          },
        }
      )
      .pipe(mergeMap((response) => this.setTokens(response)));
  }

  logoutFromAllDevices() {
    return this.http
      .delete<TokenResponse>(`${api}/auth/logout-from-all-devices`)
      .pipe(
        mergeMap((tokens) => this.setTokens(tokens))
        // tap(() => this.subscriptionService.requestSubscription())
      );
  }

  async setTokens(response: TokenResponse) {
    this.setRefreshToken(response.refreshToken);

    return this.setAccessToken(response.accessToken);
  }

  getAccessToken() {
    return ls.get(LocalStorageKey.accessToken, { decrypt: true });
  }

  async setAccessToken(token: string) {
    ls.set(LocalStorageKey.accessToken, token, { encrypt: true });

    return this.getProfile().toPromise();
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

  userHasRole(role: string | string[]) {
    if (role) {
      if (typeof role === 'string')
        return this.#userRoles.some((r) => r === role);
      else return this.#userRoles.some((r) => role.includes(r));
    }
    return false;
  }

  userNotInRole(role: string | string[]) {
    if (role) {
      if (typeof role === 'string')
        return !this.#userRoles.some((r) => r === role);
      return this.#userRoles.filter((r) => role.includes(r)).length === 0;
    }
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

    // this.#userId = authSession.userId;

    this.ability.update(authSession.rules);

    // token.set(authSession.token);

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
    a: string | string[] | null | undefined,
    b: string | string[] | null | undefined
  ) {
    let compareA: string[];
    let compareB: string[];

    if (Array.isArray(a)) compareA = [...a];
    else if (typeof a === 'string') compareA = [a];
    else if (a === null || a === undefined) compareA = [];
    else throw new Error(`'a' is not a valid type for comparison`);

    if (Array.isArray(b)) compareB = [...b];
    else if (typeof b === 'string') compareB = [b];
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
