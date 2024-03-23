import {
  AbstractControl,
  FormControl,
  ValidationErrors,
  ValidatorFn,
} from '@angular/forms';

export const startYearMustBeLessThanEndYearValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if (control.dirty) {
    const startYear = control.get('startYear') as FormControl<number | Date>;
    const endYear = control.get('endYear') as FormControl<number | Date>;
    const startYearValue =
      typeof startYear.value === 'number'
        ? startYear.value
        : (startYear.value as Date).getFullYear();
    const endYearValue =
      typeof endYear.value === 'number'
        ? endYear.value
        : (endYear.value as Date).getFullYear();

    if (
      startYear &&
      endYear &&
      startYearValue &&
      endYearValue &&
      startYearValue >= endYearValue
    ) {
      return { startYearMustBeGreaterThanEndYear: true };
    }
  }

  return null;
};
