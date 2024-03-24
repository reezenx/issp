import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AgenciesService } from '../services/agencies.service';
import { AgencyDropdown } from '@issp/common';

export const agencyDropdownResolver: ResolveFn<AgencyDropdown[]> = () => {
  return inject(AgenciesService).findAllDropdowns();
};
