import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import {
  ErrorDialogComponent,
  ErrorDialogData,
} from '../components/error-dialog/error-dialog.component';
import { AuthService } from '../service/auth.service';
import { AuthTokenInterceptor } from './auth-token.interceptor';

export interface HttpError {
  statusCode: number;
  message: string;
  error?: string;
}

@Injectable()
export class ErrorDialogInterceptor implements HttpInterceptor {
  static skipHeader = 'errorDialog';

  constructor(private dialog: MatDialog, private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.headers.has(ErrorDialogInterceptor.skipHeader)) {
      return next.handle(request);
    }

    return next.handle(request).pipe(
      tap(
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        () => {},
        (response) => {
          if (response instanceof HttpErrorResponse) {
            if (
              response.status === 401 &&
              this.authService.getRefreshToken() &&
              !request.headers.has(AuthTokenInterceptor.skipHeader)
            ) {
              return;
            }

            this.handleError(response);
          }
        }
      )
    );
  }

  handleError(res: HttpErrorResponse) {
    this.dialog.open<ErrorDialogData>(ErrorDialogComponent, {
      data: {
        title: res.error.error || 'Error',
        message: res.error.message ?? res.statusText,
      },
      width: '350px',
    });
  }
}
