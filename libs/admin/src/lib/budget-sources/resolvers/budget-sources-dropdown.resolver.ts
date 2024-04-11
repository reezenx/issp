import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { BudgetSourcesService } from '../services/budget-sources.service';

export const budgetSourcesDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(BudgetSourcesService).findAllDropdowns();
};
