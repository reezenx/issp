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
import { ItemDropdown } from '@issp/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const ITEM_PICKER_FORM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ItemPickerControlComponent),
  multi: true,
};

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'issp-item-picker-control',
  templateUrl: './item-picker-control.component.html',
  styleUrl: './item-picker-control.component.scss',
  providers: [ITEM_PICKER_FORM_CONTROL_VALUE_ACCESSOR],
})
export class ItemPickerControlComponent implements ControlValueAccessor {
  static nextId = 0;

  constructor(formBuilder: UntypedFormBuilder) {
    this.itemsFilteredOptions$ = this.searchControl.valueChanges.pipe(
      startWith(''),
      map((value: string) => this.searchFilterItems(value || ''))
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
  id = `key-value-input-${ItemPickerControlComponent.nextId++}`;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  itemsFilteredOptions$: Observable<ItemDropdown[]>;

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
  displayCode = true;

  @Input()
  itemsDropdown: ItemDropdown[] = [];

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
  get value(): ItemDropdown | null {
    if (this.form.valid) {
      return this.form.value.cnt;
    }
    return null;
  }
  set value(value: ItemDropdown | string) {
    const item = this.itemsDropdown.find((a) => a.id === value);
    const cnt = value || null;
    this.form.setValue({
      cnt: cnt,
    });
    this.searchControl.setValue(this.displayFn(item));
    this.stateChanges.next();
  }

  @Output()
  optionSelected: EventEmitter<ItemDropdown> = new EventEmitter<ItemDropdown>();

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

  writeValue(item: ItemDropdown | null): void {
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
    const value = event.option.value as ItemDropdown;
    this.form.controls['cnt'].patchValue(value.id);
  }

  displayFn = (item: ItemDropdown | string): string => {
    if (typeof item === 'string') return item;
    return item && item.name
      ? this.displayCode
        ? `(${item.code}) ${item.name}`
        : item.name
      : '';
  };

  private searchFilterItems(value: string): ItemDropdown[] {
    if (typeof value !== 'string') return this.itemsDropdown;
    const searchFilterValue = value.toLowerCase();

    return this.itemsDropdown.filter(
      (searchOption) =>
        searchOption.name.toLowerCase().includes(searchFilterValue) ||
        searchOption.code.toLowerCase().includes(searchFilterValue)
    );
  }
}
