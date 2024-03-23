import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { ActionHistory } from '../models/action-history';
import { ActionHistoryService } from '../services/action-history.service';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const actionHistoryResolver: ResolveFn<ActionHistory[]> = (
  route,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  state
) => {
  const isspId = route.parent.params['id'];
  return inject(ActionHistoryService).findAll(isspId);
};
