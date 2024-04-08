import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectTypeDetails } from '../models/permission-details';
import { ProjectTypesService } from '../services/permissions.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectTypeResolver: ResolveFn<ProjectTypeDetails> = (
  route,
  state
) => {
  const id = route.params.id;
  return inject(ProjectTypesService).findOne(id);
};
