import { ResolveFn } from "@angular/router";
import { DepartmentDetails } from "../models/department-details";
import { DepartmentsService } from "../services/departments.service";
import { inject } from "@angular/core";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const departmentResolver: ResolveFn<DepartmentDetails> = (route, state) => {
  const id = route.params.id;
  return inject(DepartmentsService).findOne(id);
};
