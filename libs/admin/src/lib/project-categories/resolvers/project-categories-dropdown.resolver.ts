import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { ProjectCategoriesService } from '../services/project-categories.service';

export const projectCategoriesDropdownResolver: ResolveFn<
  ItemDropdown[]
> = () => {
  return inject(ProjectCategoriesService).findAllDropdowns();
};
