import { ResolveFn } from '@angular/router';
import { BudgetTypeDetails } from '../models/budget-type-details';
import { BudgetTypeService } from '../services/budget-type.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const budgetTypesResolver: ResolveFn<BudgetTypeDetails[]> = (
  route,
  state
) => {
  return inject(BudgetTypeService).findAll();
};
