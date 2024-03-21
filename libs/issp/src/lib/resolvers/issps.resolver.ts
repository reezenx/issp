import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IsspService } from '../services/issps.service';
import { ISSP } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isspsResolver: ResolveFn<ISSP[]> = (route, state) => {
  return inject(IsspService).findAll();
};
