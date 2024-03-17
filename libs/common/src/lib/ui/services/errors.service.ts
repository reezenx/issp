// import { throwError as observableThrowError } from 'rxjs';
// import { Injectable } from '@angular/core';
// import { HttpErrorResponse } from '@angular/common/http';
// import { Router } from '@angular/router';
// // import { Unsubscribe } from "../../decorators/unsubscribe";
// import { NotificationsService } from './notifications.service';
// import { ComponentPortal } from '@angular/cdk/portal';
// import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
// // import { SessionExpiredOverlayComponent } from '../session-expired/session-expired.component';

// // @Unsubscribe()
// @Injectable({
//   providedIn: 'root',
// })
// export class ErrorsService {
//   lastError: HttpErrorResponse;
//   overlayDisplayed = false;
//   // overlayRef: OverlayRef = null;

//   constructor(
//     private readonly router: Router,
//     private readonly notificationService: NotificationsService,
//     public overlay: Overlay
//   ) {}

//   //**************************
//   //This method should be used globally by all other services
//   //to handle errors. See the orders service for an example.
//   //
//   handleError(error: HttpErrorResponse, decrementLoadingService?: boolean) {
//     // Prevent the notification service from continuing to display
//     if (decrementLoadingService === true) {
//       this.notificationService.decrementLoadingQueue();
//     }

//     if (!error['error']) {
//       return observableThrowError(error);
//     }
//     this.lastError = error;

//     if (error.status === 401) {
//       //Show the session expired dialog (overlay), unless we're already showing it
//       if (!this.overlayDisplayed) {
//         this.overlayDisplayed = true;
//         const config = new OverlayConfig();

//         config.positionStrategy = this.overlay
//           .position()
//           .global()
//           .left('0px')
//           .top('0px');

//         config.hasBackdrop = true;

//         // this.overlayRef = this.overlay.create(config);
//         // this.overlayRef.attach(new ComponentPortal(SessionExpiredOverlayComponent));
//       }
//     } else {
//       //Redirect to an error page.
//       const state = {};
//       state['error'] = error.message;
//       if (error.error) {
//         state['error'] = error.error.Message;
//       }
//       if (error.status) {
//         state['status'] = error.status;
//       }
//       this.router.navigate(['/errorhandler'], {
//         queryParams: { returnUrl: this.router.url },
//         state: state,
//       });
//     }
//     return observableThrowError(error.message);
//   }

//   //**************************

//   //**************************
//   //This method should be used by any service calls that want to handle all errors, except for 401
//   //unauthenticated errors. It allows the calling method to inject a default value to be returned in the
//   //event of a 401. This should be used in circumstances where a call to an API might result in a 401,
//   //but the outcome isn't important. E.g. a call to 'getcurrentuser' (an authenticated endpoint) doesn't need
//   //to redirect the user to the session-expired homepage.
//   //
//   whoCaresAbout401sError<T>(error: HttpErrorResponse, defaultValue: T): T {
//     if (!error['error']) {
//       throw observableThrowError(error);
//     }
//     console.log('Via 401 Who Cares handler: ' + error.message);
//     this.lastError = error;

//     if (error.status !== 401) {
//       this.handleError(error);
//     }
//     //Return a newed up type the caller passed in.
//     return defaultValue;
//   }

//   whoCaresAbout404sError<T>(error: HttpErrorResponse, defaultValue: T): T {
//     if (!error['error']) {
//       throw observableThrowError(error);
//     }
//     this.lastError = error;

//     if (error.status !== 404) {
//       this.handleError(error);
//     }
//     //Return a newed up type the caller passed in.
//     return defaultValue;
//   }
//   //**************************

//   //**************************
//   //This method should be used by any service calls that want to handle all errors, except for 401
//   //unauthenticated errors. It allows the calling method to inject a default value to be returned in the
//   //event of a 401. This should be used in circumstances where a call to an API might result in a 401,
//   //but the outcome isn't important. E.g. a call to 'getcurrentuser' (an authenticated endpoint) doesn't need
//   //to redirect the user to the session-expired homepage.
//   //
//   whoCaresAboutErrors<T>(error: HttpErrorResponse, defaultValue: T): T {
//     //Return a newed up type the caller passed in.
//     return defaultValue;
//   }
//   //**************************
// }
