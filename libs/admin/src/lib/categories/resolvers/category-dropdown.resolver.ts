import { inject } from "@angular/core";
import { ResolveFn } from "@angular/router";
import { CategoriesService } from '../services/categories.service';
import { CategoryDropdown } from "@issp/common";


export const agencyDropdownResolver: ResolveFn<CategoryDropdown[]> = () => {
  return inject(CategoriesService).findAllDropdowns();
};
