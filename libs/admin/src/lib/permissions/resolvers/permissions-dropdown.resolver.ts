import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { PermissionsService } from '../services/permissions.service';

export const permissionsDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(PermissionsService).findAllDropdowns();
};
