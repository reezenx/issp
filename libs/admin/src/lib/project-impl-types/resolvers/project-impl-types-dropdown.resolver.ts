import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { ProjectImplementationTypeService } from '../services/project-impl-types.service';

export const projectImplTypesDropdownResolver: ResolveFn<
  ItemDropdown[]
> = () => {
  return inject(ProjectImplementationTypeService).findAllDropdowns();
};
