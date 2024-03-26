import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CategoriesService } from '../services/categories.service';
import { CategoryDetails } from '../models/category-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const categoriesResolver: ResolveFn<CategoryDetails[]> = (route, state) => {
  return inject(CategoriesService).findAll();
};
