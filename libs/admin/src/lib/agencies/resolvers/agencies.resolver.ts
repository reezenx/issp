import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { AgenciesService } from '../services/agencies.service';
import { AgencyDetails } from '../models/agency-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const agenciesResolver: ResolveFn<AgencyDetails[]> = (route, state) => {
  return inject(AgenciesService).findAll();
};
