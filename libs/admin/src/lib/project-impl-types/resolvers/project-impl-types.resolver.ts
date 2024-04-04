import { ResolveFn } from "@angular/router";
import { ProjectImplementationTypeDetails } from "../models/project-impl-type-details";
import { inject } from "@angular/core";
import { ProjectImplementationTypeService } from "../services/project-impl-types.service";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const projectImplTypesResolver: ResolveFn<ProjectImplementationTypeDetails[]> = (route, state) => {
  return inject(ProjectImplementationTypeService).findAll();
};
