import { ResolveFn } from '@angular/router';
import { CategoryDetails } from '../models/category-details';
import { CategoriesService } from '../services/categories.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const categoryResolver: ResolveFn<CategoryDetails> = (route, state) => {
  const id = route.params.id;
  return inject(CategoriesService).findOne(id);
};
