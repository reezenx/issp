import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PermissionDetails } from '../models/permission-details';
import { PermissionsService } from '../services/permissions.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const permissionResolver: ResolveFn<PermissionDetails> = (
  route,
  state
) => {
  const id = route.params.id;
  return inject(PermissionsService).findOne(id);
};
