import { BooleanInput, coerceBooleanProperty } from '@angular/cdk/coercion';
import {
  Component,
  ElementRef,
  forwardRef,
  Input,
  ViewChild,
} from '@angular/core';
import {
  AbstractControl,
  ControlValueAccessor,
  UntypedFormBuilder,
  UntypedFormGroup,
  Validators,
  NG_VALUE_ACCESSOR,
} from '@angular/forms';
import {
  FontFamilyModel,
  FormatModel,
} from '@syncfusion/ej2-angular-richtexteditor';
import { Subscription } from 'rxjs';
import { Subject } from 'rxjs';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const RICH_TEXT_FORM_CONTROL_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => RichTextControlComponent),
  multi: true,
};

// See https://material.angular.io/guide/creating-a-custom-form-field-control for documentation / guidance
@Component({
  selector: 'issp-rich-text-control',
  templateUrl: './rich-text-control.component.html',
  styleUrls: ['./rich-text-control.component.scss'],
  providers: [RICH_TEXT_FORM_CONTROL_VALUE_ACCESSOR],
  // eslint-disable-next-line @angular-eslint/no-host-metadata-property
  host: {
    '[class.richtext-floating]': 'shouldLabelFloat',
    '[id]': 'id',
  },
})
export class RichTextControlComponent implements ControlValueAccessor {
  static nextId = 0;
  static ngAcceptInputType_disabled: BooleanInput;
  static ngAcceptInputType_required: BooleanInput;

  constructor(formBuilder: UntypedFormBuilder) {
    this.form = formBuilder.group({
      cnt: [null, [Validators.required, Validators.maxLength(this.maxLength)]],
    });

    this.valueChangesSubscription = this.form.controls[
      'cnt'
    ].valueChanges.subscribe((value) => {
      this.onChange(value);
    });
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
  // eslint-disable-next-line @typescript-eslint/no-empty-function, @typescript-eslint/no-unused-vars, @typescript-eslint/no-explicit-any
  onChange = (_: any) => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onTouched = () => {};

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  onFocusIn(event: FocusEvent) {
    if (!this.focused) {
      this.focused = true;
      this.stateChanges.next();
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars, @typescript-eslint/no-empty-function
  onFocusOut(event: FocusEvent) {}

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

    // Optionally to close it - but it's not reliable.
    //let target = event.relatedTarget as Element;
    //if (target) {
    //  let sRect = this._elementRef.nativeElement.getBoundingClientRect();
    //  let tRect = target.getBoundingClientRect();
    //  let childElement = false;
    //  if (sRect.x < tRect.x && sRect.y < tRect.y) {
    //    childElement = true;
    //  }
    //  if (!this.rteCnt.nativeElement.contains(event.relatedTarget as Element) && childElement !== true) {
    //    if (this.displayEditor === true) {
    //      setTimeout(() => {
    //        this.displayEditor = false;
    //      }, 250);
    //    }
    //  }
    //}
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocusNext(control: AbstractControl, nextElement: HTMLInputElement): void {
    // empty
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
    // empty
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setDescribedByIds(ids: string[]) {
    // empty
  }

  onContainerClick() {
    // Open the editor control if it's not already open
    if (this.displayEditor !== true) {
      this.displayEditor = true;
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
      'CreateLink',
      'SourceCode',
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

  @Input()
  public fontFamily: FontFamilyModel = {
    default: 'Roboto',
    width: '65px',
    items: [{ text: 'Roboto', value: 'Roboto' }],
  };
}
