import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectTypeDetails } from '../models/project-type-details';
import { ProjectTypesService } from '../services/project-types.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectTypeResolver: ResolveFn<ProjectTypeDetails> = (
  route,
  state
) => {
  const id = route.params.id;
  return inject(ProjectTypesService).findOne(id);
};
