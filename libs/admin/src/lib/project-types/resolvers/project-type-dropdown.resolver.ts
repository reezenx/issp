import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { ProjectTypesService } from '../services/project-types.service';

export const projectTypesDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(ProjectTypesService).findAllDropdowns();
};
