import { ResolveFn } from '@angular/router';
import { BudgetSourceDetails } from '../models/budget-source-details';
import { BudgetSourceService } from '../services/budget-source.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const budgetSourceResolver: ResolveFn<BudgetSourceDetails> = (
  route,
  state
) => {
  const id = route.params.id;
  return inject(BudgetSourceService).findOne(id);
};
