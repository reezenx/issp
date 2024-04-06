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
import { Subscription, Subject, Observable } from 'rxjs';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ItemDropdown } from '@issp/common';
import { SentenceCasePipe } from 'libs/common/src/lib/ui/pipes/sentence-case.pipe';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const TAGS_FORM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagsControlComponent),
  multi: true,
};

@UntilDestroy({ checkProperties: true })
@Component({
  selector: 'issp-tags-control',
  templateUrl: './tags-control.component.html',
  styleUrl: './tags-control.component.scss',
  providers: [TAGS_FORM_CONTROL_VALUE_ACCESSOR],
})
export class TagsControlComponent implements ControlValueAccessor {
  static nextId = 0;

  constructor(
    formBuilder: UntypedFormBuilder,
    private sentenceCasePipe: SentenceCasePipe
  ) {
    this.form = formBuilder.group({
      cnt: new FormControl(null, [Validators.required]),
    });
    // Listen to changes to the controls value
    this.valueChangesSubscription = this.form.controls[
      'cnt'
    ].valueChanges.subscribe((value) => {
      this.onChange(value);
      this.stateChanges.next();
    });
  }

  @ViewChild('cnt') cntInput: HTMLInputElement;
  valueChangesSubscription: Subscription = null;
  inputControl: FormControl = new FormControl('');
  form: FormGroup;
  /**
   * Stream that emits whenever the state of the control changes such that the parent `MatFormField`
   * needs to run change detection.
   */
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'tags-value-input';
  id = `tags-value-input-${TagsControlComponent.nextId++}`;
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

  itemsFilteredOptions$: Observable<ItemDropdown[]>;
  addOnBlur = true;
  tags: string[] = [];
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

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
  fieldName: string = 'Tags';

  @Input()
  ariaLabel: string = 'Enter Tags';

  @Input()
  fieldHint: string = null;

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
  private _placeholder = 'New tag...';

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    if (this._required) {
      this.inputControl.setValidators([Validators.required]);
    } else {
      this.inputControl.clearValidators();
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
    this._disabled ? this.inputControl.disable() : this.inputControl.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): string[] {
    if (this.form.valid) {
      return this.form.value.cnt;
    }
    return null;
  }
  set value(value: string[]) {
    const cnt = value || null;
    this.form.setValue({
      cnt: cnt,
    });
    this.tags = value;
    this.stateChanges.next();
  }

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

  writeValue(item: string[]): void {
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
  get tagsControl() {
    return this.form.controls['cnt'];
  }

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.tags.push(value);
    }

    event.chipInput?.clear();
    // this.tagsControl.patchValue(this.tags);
    this.form.controls['cnt'].patchValue(this.tags);
    this.stateChanges.next();
  }

  edit(tag: string, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(tag);
      return;
    }

    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index] = value;
    }
    // this.tagsControl.patchValue(this.tags);
    this.form.controls['cnt'].patchValue(this.tags);
    this.stateChanges.next();
  }

  remove(tag: string): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    // this.tagsControl.patchValue(this.tags);
    this.form.controls['cnt'].patchValue(this.tags);
    this.stateChanges.next();
  }
}
