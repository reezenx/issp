import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ProjectCategoryDetails } from '../models/project-category-details';
import { ProjectCategoriesService } from '../services/project-categories.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectCategoriesResolver: ResolveFn<ProjectCategoryDetails[]> = (
  route,
  state
) => {
  return inject(ProjectCategoriesService).findAll();
};
