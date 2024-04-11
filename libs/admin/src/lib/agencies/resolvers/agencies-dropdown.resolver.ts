import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AgenciesService } from '../services/agencies.service';
import { ItemDropdown } from '@issp/common';

export const agenciesDropdownResolver: ResolveFn<ItemDropdown[]> = () => {
  return inject(AgenciesService).findAllDropdowns();
};
