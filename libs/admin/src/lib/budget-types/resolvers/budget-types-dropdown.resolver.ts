import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ItemDropdown } from '@issp/common';
import { BudgetTypeService } from '../services/budget-type.service';

export const budgetTypesDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(BudgetTypeService).findAllDropdowns();
};
