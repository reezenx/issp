import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectsService } from '../services/projects.service';
import { ProjectDetails } from '../models/project-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectsResolver: ResolveFn<ProjectDetails[]> = (route, state) => {
  return inject(ProjectsService).findAll();
};
