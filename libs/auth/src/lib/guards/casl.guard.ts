import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
import { ActionType, SubjectType, URLS } from '@issp/common';
import { AuthService } from '../auth.service';

/**
 * Produces Angular functional route guards
 */
export class CaslGuard {
  /**
   * Produces Angular functional route guards that check if the user has the given CASL ability.
   * Redirects to the login page otherwise.
   */
  static can(action: ActionType, subject: SubjectType): CanMatchFn {
    return () =>
      inject(AuthService).ability.can(action, subject)
        ? true
        : inject(Router).parseUrl(URLS.AUTH.LOGIN);
  }

  /**
   * Produces Angular functional route guards that check if the user does not have the given CASL ability.
   * Redirects to the login page otherwise.
   */
  static cannot(action: ActionType, subject: SubjectType): CanMatchFn {
    return () =>
      inject(AuthService).ability.cannot(action, subject)
        ? true
        : inject(Router).parseUrl(URLS.AUTH.LOGIN);
  }
}
