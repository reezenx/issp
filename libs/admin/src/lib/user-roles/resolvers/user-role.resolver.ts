import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserRolesService } from '../services/user-roles.service';
import { UserRoleDetails } from '../models/user-role-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const userResolver: ResolveFn<UserRoleDetails> = (route, state) => {
  const id = route.params.id;
  return inject(UserRolesService).findOne(id);
};
