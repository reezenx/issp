import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { CategoriesService } from '../services/categories.service';

export const categoriesDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(CategoriesService).findAllDropdowns();
};
