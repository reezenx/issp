import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ISSPDetails } from '@issp/common';
import { IsspsService } from '../services/issps.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isspsResolver: ResolveFn<ISSPDetails[]> = (route, state) => {
  return inject(IsspsService).findAll();
};
