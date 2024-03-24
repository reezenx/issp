import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AgenciesService } from '../services/agencies.service';
import { AgencyDropdown } from '../models/agency-dropdown';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const agencyDropdownResolver: ResolveFn<AgencyDropdown[]> = () => {
  return inject(AgenciesService).findAllDropdowns();
};
