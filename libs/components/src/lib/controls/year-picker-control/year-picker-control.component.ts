import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { Component, forwardRef, Input, ViewChild } from '@angular/core';
import {
  ControlValueAccessor,
  FormControl,
  NG_VALUE_ACCESSOR,
  Validators,
} from '@angular/forms';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';

import moment from 'moment';
import { Subject } from 'rxjs';

export const YEAR_MODE_FORMATS = {
  parse: {
    dateInput: 'YYYY',
  },
  display: {
    dateInput: 'YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};

@Component({
  selector: 'issp-year-picker-control',
  templateUrl: './year-picker-control.component.html',
  styleUrl: './year-picker-control.component.scss',
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: YEAR_MODE_FORMATS },
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => YearPickerControlComponent),
      multi: true,
    },
  ],
})
export class YearPickerControlComponent implements ControlValueAccessor {
  static nextId = 0;
  /**
   * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
   * needs to run change detection.
   */
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'key-value-input';
  id = `key-value-input-${YearPickerControlComponent.nextId++}`;

  @Input() customClass = '';

  @Input() label = 'Year';

  @Input()
  class = 'w-100 m-b-10';

  @Input()
  prefixIcon = 'calendar-time';

  @Input()
  suffixIcon = 'backspace';

  @Input()
  error = {
    startYearMustBeGreaterThanEndYear: false,
  };

  _max: moment.Moment;
  @Input()
  get max(): number | Date {
    return this._max ? this._max.year() : undefined;
  }
  set max(max: number | Date) {
    if (max) {
      const momentDate =
        typeof max === 'number' ? moment([max, 0, 1]) : moment(max);
      this._max = momentDate.isValid() ? momentDate : undefined;
    }
  }

  _min: moment.Moment;
  @Input()
  get min(): number | Date {
    return this._min ? this._min.year() : undefined;
  }
  set min(min: number | Date) {
    if (min) {
      const momentDate =
        typeof min === 'number' ? moment([min, 0, 1]) : moment(min);
      this._min = momentDate.isValid() ? momentDate : undefined;
    }
  }

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder = 'Select Year';

  @Input()
  set invalid(val: boolean) {
    const error = val
      ? {
          invalid: true,
        }
      : null;
    this._inputCtrl.setErrors(error);
  }

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    if (this._required) {
      this._inputCtrl.setValidators([Validators.required]);
    } else {
      this._inputCtrl.clearValidators();
    }
    this.stateChanges.next();
  }
  private _required = false;

  @Input() touchUi = false;

  @ViewChild(MatDatepicker, { static: false })
  _picker: MatDatepicker<moment.Moment>;

  _inputCtrl: FormControl = new FormControl();

  // Function to call when the date changes.
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  onChange = (year: Date) => {};

  // Function to call when the input is touched (when a star is clicked).
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  /** send the focus away from the input so it doesn't open again */
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars
  _takeFocusAway = (datepicker: MatDatepicker<moment.Moment>) => {};

  writeValue(date: Date | number): void {
    const _date = typeof date === 'number' ? new Date(date, 0) : date;
    if (date && this._isYearEnabled(_date.getFullYear())) {
      const momentDate = moment(_date);
      if (momentDate.isValid()) {
        momentDate.set({ date: 1 });
        this._inputCtrl.setValue(moment(_date), { emitEvent: false });
      }
    }
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Allows Angular to disable the input.
  setDisabledState(isDisabled: boolean): void {
    if (this._picker) {
      isDisabled
        ? (this._picker.disabled = true)
        : (this._picker.disabled = false);
    }

    isDisabled ? this._inputCtrl.disable() : this._inputCtrl.enable();
  }

  _yearSelectedHandler(
    chosenDate: moment.Moment,
    datepicker: MatDatepicker<moment.Moment>
  ) {
    datepicker.close();

    if (!this._isYearEnabled(chosenDate.year())) {
      return;
    }

    chosenDate.set({ date: 1 });

    this._inputCtrl.setValue(chosenDate, { emitEvent: false });
    this.onChange(chosenDate.toDate());
    this.onTouched();
  }

  _openDatepickerOnClick(datepicker: MatDatepicker<moment.Moment>) {
    if (!datepicker.opened) {
      datepicker.open();
    }
  }

  /** Whether the given year is enabled. */
  private _isYearEnabled(year: number) {
    // disable if the year is greater than maxDate lower than minDate
    if (
      year === undefined ||
      year === null ||
      (this._max && year > this._max.year()) ||
      (this._min && year < this._min.year())
    ) {
      return false;
    }

    return true;
  }

  discardChanges() {
    this._inputCtrl.setValue(null);
  }
}
