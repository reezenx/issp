import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CategoryDropdown } from '@issp/common';
import { CategoriesService } from '../services/categories.service';

export const categoryDropdownResolver: ResolveFn<CategoryDropdown[]> = () => {
  return inject(CategoriesService).findAllDropdowns();
};
