import { ResolveFn } from '@angular/router';
import { ProjectTypeGroupDetails } from '../models/project-type-group-details';
import { ProjectTypeGroupsService } from '../services/project-type-groups.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectTypeGroupResolver: ResolveFn<ProjectTypeGroupDetails> = (
  route,
  state
) => {
  const id = route.params.id;
  return inject(ProjectTypeGroupsService).findOne(id);
};
