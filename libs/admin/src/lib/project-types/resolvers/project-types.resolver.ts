import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectTypesService } from '../services/project-types.service';
import { ProjectTypeDetails } from '../models/project-type-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectTypesResolver: ResolveFn<ProjectTypeDetails[]> = (
  route,
  state
) => {
  return inject(ProjectTypesService).findAll();
};
