import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { DepartmentsService } from '../services/departments.service';
import { DepartmentDetails } from '../models/department-details';


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const departmentsResolver: ResolveFn<DepartmentDetails[]> = (route, state) => {
  return inject(DepartmentsService).findAll();
};
