// import { tap, map, catchError } from 'rxjs/operators';
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable, BehaviorSubject } from 'rxjs';
// import { ErrorsService } from '../../shared/services/errors.service';
// import { Unsubscribe } from '../../decorators/unsubscribe';
// import { User } from './models/user';

// @Unsubscribe()
// @Injectable({
//   providedIn: 'root',
// })
// export class UsersService {
//   route = 'api/v1/auth/login';

//   constructor(
//     private readonly http: HttpClient,
//     private readonly errorsService: ErrorsService
//   ) {}

//   private emitCurrentUser = new BehaviorSubject<User>(new User());
//   currentUser$ = this.emitCurrentUser.asObservable();

//   login(email: string, password: string): Observable<User> {
//     const data = this.http.post(this.route, {email, password}).pipe(
//       map((data) => {
//         const sld = new User();
//         sld.assign(data);
//         return sld;
//       }),
//       tap((user) => {
//         this.emitCurrentUser.next(user);
//       }),
//       catchError((err) => this.errorsService.handleError(err, true))
//     );
//     return data;
//   }
// }
