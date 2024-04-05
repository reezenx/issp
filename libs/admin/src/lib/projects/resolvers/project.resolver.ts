import { ResolveFn } from '@angular/router';
import { ProjectDetails } from '../models/project-details';
import { ProjectsService } from '../services/projects.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectResolver: ResolveFn<ProjectDetails> = (route, state) => {
  const id = route.params.id;
  return inject(ProjectsService).findOne(id);
};
