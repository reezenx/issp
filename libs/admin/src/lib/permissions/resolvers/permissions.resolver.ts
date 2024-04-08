import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PermissionsService } from '../services/permissions.service';
import { PermissionDetails } from '../models/permission-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const permissionsResolver: ResolveFn<PermissionDetails[]> = (
  route,
  state
) => {
  return inject(PermissionsService).findAll();
};
