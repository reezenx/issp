import { take } from 'rxjs/operators';
import { Subscription, zip } from 'rxjs';
import { Injectable } from '@angular/core';
// import { UsersService } from "../../shared/services/users.service";

// @Unsubscribe()
@Injectable({
  providedIn: 'root',
})
export class StartupService {
  // constructor(
  //   private readonly errorsService: ErrorsService // private readonly usersService: UsersService,
  // ) {}

  async load(): Promise<any> {
    // Service requests
    // const req1 = this.usersService.getCurrentUser();
    // return zip(req1).pipe(take(1)).toPromise().catch((err) => this.errorsService.handleError(err));
  }
}
