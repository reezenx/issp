import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IsspsService } from '../services/issps.service';
import { ISSPDetails } from '../models/issp-details';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isspsResolver: ResolveFn<ISSPDetails[]> = (route, state) => {
  return inject(IsspsService).findAll();
};
