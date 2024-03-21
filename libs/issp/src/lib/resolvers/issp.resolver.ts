import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IsspService } from '../services/issps.service';
import { ISSP } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const isspResolver: ResolveFn<ISSP> = (route, state) => {
  const id = route.params.id;
  return inject(IsspService).findOne(id);
};