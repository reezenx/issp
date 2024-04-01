import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IsspsService } from '../services/issps.service';
import { ISSPDetails } from '@issp/common';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isspResolver: ResolveFn<ISSPDetails> = (route, state) => {
  const id = route.params.id;
  return inject(IsspsService).findOne(id);
};
