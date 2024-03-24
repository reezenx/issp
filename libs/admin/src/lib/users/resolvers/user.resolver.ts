import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersService } from '../services/users.service';
import { UserDetails } from '../models/user-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const userResolver: ResolveFn<UserDetails> = (route, state) => {
  const id = route.params.id;
  return inject(UsersService).findOne(id);
};
