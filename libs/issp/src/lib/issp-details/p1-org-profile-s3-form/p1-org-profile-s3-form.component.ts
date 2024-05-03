import { Component, Input } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISSPP1OrgProfileS3Info } from '@issp/common';
import { Subscription, take } from 'rxjs';

import { IsspP1OrgProfileS3Service } from '../../services/issp.p1-org-profile-s3.service';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-p1-org-profile-s3-form',
  templateUrl: './p1-org-profile-s3-form.component.html',
  styleUrl: './p1-org-profile-s3-form.component.scss',
})
export class P1OrgProfileS3FormComponent {
  form: FormGroup;
  subs: Subscription[] = [];

  @Input()
  isspId: string = null;

  _item: ISSPP1OrgProfileS3Info;
  @Input()
  get item() {
    return this._item;
  }
  set item(val: ISSPP1OrgProfileS3Info) {
    this._item = val;
    this.form.patchValue(val);
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly isspP1OrgProfileS3Service: IsspP1OrgProfileS3Service,
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
      this.form.controls.isspId.patchValue(this.isspId);
      const obs = this.form.value.id
        ? this.isspP1OrgProfileS3Service.updateOne(this.form.value)
        : this.isspP1OrgProfileS3Service.createOne(this.form.value);
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
