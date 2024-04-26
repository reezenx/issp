import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISSPP1OrgProfileS1Info } from '@issp/common';
import { Subscription, take } from 'rxjs';
import { IsspP1OrgProfileS1Service } from '../../services/issp.p1-org-profile-s1.service';

@Component({
  selector: 'issp-p1-org-profile-s1-form',
  templateUrl: './p1-org-profile-s1-form.component.html',
  styleUrl: './p1-org-profile-s1-form.component.scss',
})
export class P1OrgProfileS1FormComponent {
  form: FormGroup;
  subs: Subscription[] = [];

  _item: ISSPP1OrgProfileS1Info;
  @Input()
  get item() {
    return this._item;
  }
  set item(val: ISSPP1OrgProfileS1Info) {
    this._item = val;
    this.form.patchValue(val);
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly isspP1OrgProfileS1Service: IsspP1OrgProfileS1Service,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>(null),
      isspId: new FormControl<string>(null),
      a1MandateFunctions: new FormControl<string>(null, [Validators.required]),
      a1MandateLegal: new FormControl<string>(null, [Validators.required]),
      a2Vision: new FormControl<string>(null, [Validators.required]),
      a3Mission: new FormControl<string>(null, [Validators.required]),
      a4FinalOutputs: new FormControl<string>(null, [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      const obs = this.form.value.id
        ? this.isspP1OrgProfileS1Service.updateOne(this.form.value)
        : this.isspP1OrgProfileS1Service.createOne(this.form.value);
      obs.pipe(take(1)).subscribe(() => {
        this.form.markAsPristine();
        this.snackBar.open(
          'Department/Agency Vision / Mission Statement (P1S1) successfully saved!',
          'Ok',
          {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000,
          }
        );
      });
    }
  }
}
