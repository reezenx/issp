import { Component, Input } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISSPP1OrgProfileS2Info } from '@issp/common';
import { Subscription, take } from 'rxjs';
import { IsspP1OrgProfileS2Service } from '../../services/issp.p1-org-profile-s2.service';

@Component({
  selector: 'issp-p1-org-profile-s2-form',
  templateUrl: './p1-org-profile-s2-form.component.html',
  styleUrl: './p1-org-profile-s2-form.component.scss',
})
export class P1OrgProfileS2FormComponent {
  form: FormGroup;
  subs: Subscription[] = [];

  _item: ISSPP1OrgProfileS2Info;
  @Input()
  get item() {
    return this._item;
  }
  set item(val: ISSPP1OrgProfileS2Info) {
    this._item = val;
    this.form.patchValue(val);
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly isspP1OrgProfileS2Service: IsspP1OrgProfileS2Service,
    private snackBar: MatSnackBar
  ) {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>(null),
      isspId: new FormControl<string>(null),
      b1PlannerName: new FormControl<string>(null, [Validators.required]),
      b1PlantillaPosition: new FormControl<string>(null, [Validators.required]),
      b1OrgUnit: new FormControl<string>(null, [Validators.required]),
      b1Email: new FormControl<string>(null, [
        Validators.required,
        Validators.email,
      ]),
      b1Contacts: new FormControl<string[]>(null, [Validators.required]),
      b2AnnualICTBudget: new FormControl<number>(0, [
        Validators.required,
        Validators.min(1),
      ]),
      b2OtherSources: new FormControl<string>(null, [Validators.required]),
      b3TotalNoEmp: new FormControl<number>(null, [Validators.required]),
      b3NoRegionalOffices: new FormControl<number>(null, [Validators.required]),
      b3NoProvOffices: new FormControl<number>(null, [Validators.required]),
      b3NoOthersOffices: new FormControl<number>(null, [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      const obs = this.form.value.id
        ? this.isspP1OrgProfileS2Service.updateOne(this.form.value)
        : this.isspP1OrgProfileS2Service.createOne(this.form.value);
      obs.pipe(take(1)).subscribe(() => {
        this.form.markAsPristine();
        this.snackBar.open(
          'Department/Agency Profile (P1S2) successfully saved!',
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
