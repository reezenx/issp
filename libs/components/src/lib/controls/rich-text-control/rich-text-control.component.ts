import { FocusMonitor } from '@angular/cdk/a11y';
import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  forwardRef,
  Inject,
  Input,
  OnDestroy,
  Optional,
  Self,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormGroup,
  NgControl,
  Validators,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  MAT_FORM_FIELD,
  MatFormField,
  MatFormFieldControl,
} from '@angular/material/form-field';
import { FormatModel } from '@syncfusion/ej2-angular-richtexteditor';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

// See https://material.angular.io/guide/creating-a-custom-form-field-control for documentation / guidance
@Component({
  selector: 'issp-rich-text-control',
  templateUrl: './rich-text-control.component.html',
  styleUrls: ['./rich-text-control.component.scss'],
  providers: [
    { provide: MatFormFieldControl, useExisting: RichTextControlComponent },
  ],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.richtext-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
})
export class RichTextControlComponent
  implements ControlValueAccessor, MatFormFieldControl<string>, OnDestroy
{
  static nextId = 0;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_required: BooleanInput;

  constructor(
    formBuilder: UntypedFormBuilder,
    private _focusMonitor: FocusMonitor,
    private _elementRef: ElementRef<HTMLElement>,
    @Optional() @Inject(MAT_FORM_FIELD) public _formField: MatFormField,
    @Optional() @Self() public ngControl: NgControl
  ) {
    this.form = formBuilder.group({
      cnt: [null, [Validators.required, Validators.maxLength(this.maxLength)]],
    });

    this.valueChangesSubscription = this.form.controls[
      'cnt'
    ].valueChanges.subscribe((value) => {
      this.onChange(value);
    });

    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }
  }

  @ViewChild('rteCnt')
  rteCnt: ElementRef<HTMLDivElement>;

  @ViewChild('cnt')
  cntInput: HTMLInputElement;

  valueChangesSubscription: Subscription;
  form: UntypedFormGroup;
  stateChanges = new Subject<void>();
  focused = false;
  touched = false;
  controlType = 'richtext-input';
  containerId = `rte-container-${RichTextControlComponent.nextId++}`;
  id = `richtext-input-${RichTextControlComponent.nextId++}`;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onChange = (_: any) => {
    //empty
  };
  onTouched = () => {
    // empty
  };

  @Input()
  fieldName: string = null;

  @Input()
  fieldHint: string = null;

  @Input()
  autoSaveInterval = 500;

  @Input()
  keepEditorOpen = true;

  @Input()
  maxLength = 2000;

  displayEditor = false;

  get empty() {
    return (
      this.form.controls['cnt'].value === null ||
      this.form.controls['cnt'].value === ''
    );
  }

  get shouldLabelFloat() {
    return this.focused || !this.empty;
  }

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('aria-describedby') userAriaDescribedBy: string;

  @Input()
  get placeholder(): string {
    return this._placeholder;
  }
  set placeholder(value: string) {
    this._placeholder = value;
    this.stateChanges.next();
  }
  private _placeholder: string;

  @Input()
  get required(): boolean {
    return this._required;
  }
  set required(value: boolean) {
    this._required = coerceBooleanProperty(value);
    if (this._required) {
      this.form.controls['cnt'].setValidators([Validators.required]);
    } else {
      this.form.controls['cnt'].clearValidators();
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
    this._disabled ? this.form.disable() : this.form.enable();
    this.stateChanges.next();
  }
  private _disabled = false;

  @Input()
  get value(): string | null {
    if (this.form.valid) {
      return this.form.value.cnt;
    }
    return null;
  }
  set value(content: string | null) {
    const cnt = content || '';
    this.form.setValue({ cnt });
    this.stateChanges.next();
  }

  get errorState(): boolean {
    return this.form.invalid && this.touched;
  }

  ngOnDestroy() {
    this.stateChanges.complete();
    this._focusMonitor.stopMonitoring(this._elementRef);
    this._focusMonitor.stopMonitoring(this.rteCnt);
    if (
      this.valueChangesSubscription &&
      !this.valueChangesSubscription.closed
    ) {
      this.valueChangesSubscription.unsubscribe();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  onFocusOut(event: FocusEvent) {
    if (
      !this._elementRef.nativeElement.contains(event.relatedTarget as Element)
    ) {
      this.touched = true;
      this.focused = false;
      this.onTouched();
      this.stateChanges.next();
    }
  }

  onEsc(event: KeyboardEvent) {
    if (event.keyCode === 27) {
      if (this.focused) {
        this.focused = false;
        this.touched = false;
        this.stateChanges.next();
      }
      //this.displayEditor = false;
      if (this.displayEditor === true) {
        setTimeout(() => {
          this.displayEditor = false;
        }, 250);
      }
    }
  }

  autoFocusNext(
    control: AbstractControl,
    nextElement?: HTMLInputElement
  ): void {
    if (!control.errors && nextElement) {
      this._focusMonitor.focusVia(nextElement, 'program');
    }
  }

  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    if (control.value.length < 1) {
      this._focusMonitor.focusVia(prevElement, 'program');
    }
  }

  setDescribedByIds(ids: string[]) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const controlElement = this._elementRef.nativeElement.querySelector(
      '.richtext-input-container'
    )!;
    controlElement.setAttribute('aria-describedby', ids.join(' '));
  }

  onContainerClick() {
    // Open the editor control if it's not already open
    if (this.displayEditor !== true) {
      this.displayEditor = true;
      setTimeout(() => {
        this._focusMonitor.focusVia(this.cntInput, 'program');
      }, 500);
    } else {
      this._focusMonitor.focusVia(this.cntInput, 'program');
    }
  }

  writeValue(tel: string | null): void {
    this.value = tel;
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

  @Input()
  public tools = {
    enabled: true,
    enableFloating: false,
    type: 'SingleRow',
    items: [
      'Undo',
      'Redo',
      '|',
      'Bold',
      'Italic',
      'Underline',
      'StrikeThrough',
      'SubScript',
      'SuperScript',
      'LowerCase',
      'UpperCase',
      '|',
      'Formats',
      'Alignments',
      'OrderedList',
      'UnorderedList',
      'Indent',
      'Outdent',
      '|',
    ],
  };

  @Input()
  public formats: FormatModel = {
    default: 'Paragraph',
    width: '65px',
    types: [
      { text: 'Paragraph', value: 'p' },
      { text: 'Footnode', value: 'small' },
      { text: 'Code', value: 'pre' },
      { text: 'Quotation', value: 'quote' },
      { text: 'Heading 1', value: 'h1' },
      { text: 'Heading 2', value: 'h2' },
      { text: 'Heading 3', value: 'h3' },
      { text: 'Heading 4', value: 'h4' },
      { text: 'Heading 5', value: 'h5' },
      { text: 'Heading 6', value: 'h6' },
    ],
  };
}
