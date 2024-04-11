import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { UserRolesService } from '../services/user-roles.service';

export const userRolesDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(UserRolesService).findAllDropdowns();
};
