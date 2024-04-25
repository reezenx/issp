import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, map, take } from 'rxjs/operators';
import { UniqueValidatorOptions } from '../../models/unique-validator-options';

export class IsKeyUniqueValidatorOptions implements UniqueValidatorOptions {
  ignoreId?: string = null;
  agencyId?: string = null;
}

export type ValidateUniqueKeyFn<T> = (
  keyValue: string,
  props: T
) => Observable<boolean>;

export function UniqueKeyValidator<T>(
  func: ValidateUniqueKeyFn<T>,
  props: T
): AsyncValidatorFn {
  return (
    ctrl: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    if (!ctrl.value) {
      return of(null);
    }
    if (ctrl.dirty) {
      return func(ctrl.value, props).pipe(
        take(1),
        map((isAvailable) => (isAvailable ? null : { notUnique: true })),
        catchError(() => of(null))
      );
    } else {
      return of(null);
    }
  };
}
