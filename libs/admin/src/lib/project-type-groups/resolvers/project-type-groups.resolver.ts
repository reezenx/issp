import { ResolveFn } from '@angular/router';
import { ProjectTypeGroupDetails } from '../models/project-type-group-details';
import { ProjectTypeGroupsService } from '../services/project-type-groups.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectTypeGroupsResolver: ResolveFn<ProjectTypeGroupDetails[]> = (
  route,
  state
) => {
  return inject(ProjectTypeGroupsService).findAll();
};
