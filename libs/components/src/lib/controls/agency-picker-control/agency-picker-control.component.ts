import {
  Component,
  EventEmitter,
  forwardRef,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  ControlValueAccessor,
  UntypedFormBuilder,
  FormControl,
  Validators,
  FormGroup,
  AbstractControl,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { Subscription, Subject, Observable, startWith, map } from 'rxjs';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AgencyDropdown } from '@issp/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const AGENCY_PICKER_FORM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => AgencyPickerControlComponent),
  multi: true,
};

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'issp-agency-picker-control',
  templateUrl: './agency-picker-control.component.html',
  styleUrl: './agency-picker-control.component.scss',
  providers: [AGENCY_PICKER_FORM_CONTROL_VALUE_ACCESSOR],
})
// MatFormFieldControl<AgencyDropdown>,
export class AgencyPickerControlComponent implements ControlValueAccessor {
  static nextId = 0;

  constructor(formBuilder: UntypedFormBuilder) {
    this.agenciesFilteredOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.searchFilterAgencies(value || ''))
    );

    this.form = formBuilder.group({
      cnt: new FormControl(null, [Validators.required]),
    });
    // Listen to changes to the controls value
    this.valueChangesSubscription = this.form.controls[
      'cnt'
    ].valueChanges.subscribe((value) => {
      this.onChange(value);
    });
  }

  @ViewChild('cnt') cntInput: HTMLInputElement;
  valueChangesSubscription: Subscription = null;
  searchControl: FormControl = new FormControl('');
  form: FormGroup;
  /**
   * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
   * needs to run change detection.
   */
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'key-value-input';
  id = `key-value-input-${AgencyPickerControlComponent.nextId++}`;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  agenciesFilteredOptions$: Observable<AgencyDropdown[]>;

  get empty() {
    return (
      this.form.controls['cnt'].value === null ||
      this.form.controls['cnt'].value === ''
    );
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  @Input()
  fieldName: string = null;

  @Input()
  fieldHint: string = null;

  @Input()
  agenciesDropdown: AgencyDropdown[] = [];

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-describedby')
  userAriaDescribedBy: string;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder = '';

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    if (this._required) {
      this.searchControl.setValidators([Validators.required]);
    } else {
      this.searchControl.clearValidators();
    }
    this.stateChanges.next();
  }
  private _required = false;

  @Input()
  get disabled(): boolean {
    return this._disabled;
  }
  set disabled(value: boolean) {
    this._disabled = coerceBooleanProperty(value);
    this._disabled ? this.searchControl.disable() : this.searchControl.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): AgencyDropdown | null {
    if (this.form.valid) {
      return this.form.value.cnt;
    }
    return null;
  }
  set value(value: AgencyDropdown | string) {
    const agency = this.agenciesDropdown.find((a) => a.id === value);
    const cnt = value || null;
    this.form.setValue({
      cnt: cnt,
    });
    this.searchControl.setValue(this.displayFn(agency));
    this.stateChanges.next();
  }

  @Output()
  optionSelected: EventEmitter<AgencyDropdown> =
    new EventEmitter<AgencyDropdown>();

  get errorState(): boolean {
    return this.form.invalid && this.touched;
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFocusOut(event: FocusEvent) {
    /* empty */
  }

  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      /* empty */
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      /* empty */
    }
  }

  writeValue(item: AgencyDropdown | null): void {
    this.value = item;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  //////////////////////////////////////
  // Functions specific to this control
  //////////////////////////////////////

  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    const value = event.option.value as AgencyDropdown;
    this.form.controls['cnt'].patchValue(value.id);
  }

  displayFn = (agency: AgencyDropdown | string): string => {
    if (typeof agency === 'string') return agency;
    return agency && agency.name ? `(${agency.code}) ${agency.name}` : '';
  };

  private searchFilterAgencies(value: string): AgencyDropdown[] {
    if (typeof value !== 'string') return this.agenciesDropdown;
    const searchFilterValue = value.toLowerCase();

    return this.agenciesDropdown.filter(
      (searchOption) =>
        searchOption.name.toLowerCase().includes(searchFilterValue) ||
        searchOption.code.toLowerCase().includes(searchFilterValue)
    );
  }
}
