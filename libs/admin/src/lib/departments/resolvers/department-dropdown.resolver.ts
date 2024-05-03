import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { DepartmentsService } from '../services/departments.service';

export const departmentsDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(DepartmentsService).findAllDropdowns();
};
