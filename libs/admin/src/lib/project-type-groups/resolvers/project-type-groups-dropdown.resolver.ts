import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { ProjectTypeGroupsService } from '../services/project-type-groups.service';

export const projectTypeGroupsDropdownResolver: ResolveFn<
  ItemDropdown[]
> = () => {
  return inject(ProjectTypeGroupsService).findAllDropdowns();
};
