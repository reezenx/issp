import { ResolveFn } from '@angular/router';
import { AgencyDetails } from '../models/agency-details';
import { AgenciesService } from '../services/agencies.service';
import { inject } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const agencyResolver: ResolveFn<AgencyDetails> = (route, state) => {
  const id = route.params.id;
  return inject(AgenciesService).findOne(id);
};
