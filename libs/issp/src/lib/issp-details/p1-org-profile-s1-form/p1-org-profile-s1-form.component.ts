import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '@issp/auth';
import { ISSPDetails, ISSPP1OrgProfileS1Form } from '@issp/common';
import { User } from '@prisma/client';
import { Subscription, take } from 'rxjs';
import { IsspsService } from '../../services/issps.service';

@Component({
  selector: 'issp-p1-org-profile-s1-form',
  templateUrl: './p1-org-profile-s1-form.component.html',
  styleUrl: './p1-org-profile-s1-form.component.scss',
})
export class P1OrgProfileS1FormComponent {
  form: FormGroup;
  issp: ISSPDetails;
  currentUser: User;
  subs: Subscription[] = [];

  _item: ISSPP1OrgProfileS1Form;
  @Input()
  get item() {
    return this._item;
  }
  set item(val: ISSPP1OrgProfileS1Form) {
    this._item = val;
    this.form.patchValue(val);
  }

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly isspService: IsspsService,
    private readonly authService: AuthService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      a1MandateFunctions: new FormControl<string>('', [Validators.required]),
      a1MandateLegal: new FormControl<string>(null, [Validators.required]),
      a2Vision: new FormControl<string>(null, [Validators.required]),
      a3Mission: new FormControl<string>(null, [Validators.required]),
      a4FinalOutputs: new FormControl<string[]>([], [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.isspService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('ISSP successfully created!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000,
          });
        });
    }
  }
}
