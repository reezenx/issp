import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UsersService } from '../services/users.service';
import { UserDetails } from '../models/user-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const usersResolver: ResolveFn<UserDetails[]> = (route, state) => {
  return inject(UsersService).findAll();
};
