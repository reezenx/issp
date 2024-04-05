import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { IsspDropdown } from '@issp/common';
import { IsspsService } from '../services/issps.service';

export const isspsDropdownResolver: ResolveFn<IsspDropdown[]> = () => {
  return inject(IsspsService).findAllDropdowns();
};
