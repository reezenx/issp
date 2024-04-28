import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { IsspsService } from '../services/issps.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { $Enums, ISSPScope, ISSPStatus, User } from '@prisma/client';
import {
  ISSP_Scopes,
  ISSP_Statuses,
  ISSP_SubScopes,
  ISSPDetails,
  startYearMustBeLessThanEndYearValidator,
} from '@issp/common';
import { AuthService } from '@issp/auth';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item-new',
  templateUrl: './issp-item-new.component.html',
  styleUrl: './issp-item-new.component.scss',
})
export class IsspItemNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly isspService: IsspsService,
    private readonly authService: AuthService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  form: FormGroup;
  issp: ISSPDetails;
  currentUser: User;
  subs: Subscription[] = [];
  scopeList = Object.entries(ISSP_Scopes).map(([key]) => key);
  subScopeList = Object.entries(ISSP_SubScopes).map(([key]) => key);
  filteredSubScopeList: string[] = [];
  titleMinLength = 6;
  titleMaxLength = 100;

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
    this.initCurrentUser();
  }

  initForm() {
    this.form = this.formBuilder.group(
      {
        title: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(this.titleMinLength),
          Validators.maxLength(this.titleMaxLength),
        ]),
        description: new FormControl<string>('', [Validators.required]),
        endYear: new FormControl<number>(null, [Validators.required]),
        startYear: new FormControl<number>(null, [Validators.required]),
        status: new FormControl<ISSPStatus>(ISSP_Statuses.NOT_STARTED),
        scope: new FormControl<string>(null, [Validators.required]),
        subScope: new FormControl<string>(null, [Validators.required]),
        version: new FormControl<number>(1),
        agencyId: new FormControl<string>(null, [Validators.required]),
        authorId: new FormControl<string>(null, [Validators.required]),
        tags: new FormControl<string[]>([]),
      },
      { validator: startYearMustBeLessThanEndYearValidator }
    );
  }

  initCurrentUser() {
    this.currentUser = this.authService.user;
    this.form.controls.agencyId.patchValue(this.currentUser.agencyId);
    this.form.controls.authorId.patchValue(this.currentUser.id);
  }

  initSubs() {
    const valueSub = this.form.controls.scope.valueChanges.subscribe((data) => {
      if (data === $Enums.ISSPScope.DEPARTMENT_WIDE) {
        this.form.controls.subScope.disable();
        this.form.controls.subScope.setValue(null);
        this.form.controls.subScope.clearValidators();
      } else {
        this.form.controls.subScope.enable();
        this.form.controls.subScope.addValidators([Validators.required]);
        this.form.controls.subScope.updateValueAndValidity();
      }

      if (data === $Enums.ISSPScope.AGENCY_WIDE) {
        this.filteredSubScopeList = this.subScopeList.filter(
          (s) => s !== $Enums.ISSPSubScope.WITH_BUREAUS
        );
      } else {
        this.filteredSubScopeList = this.subScopeList;
      }
    });
    this.subs.push(valueSub);
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
          this.navigateToEdit(data.id);
        });
    }
  }

  discardChanges() {
    if (this.form.dirty) {
      this.dialog
        .open(ConfirmationDialogComponent, {
          data: {
            title: 'Discard Changes',
            message: 'Are you sure you want to discard your changes?',
          } as ConfirmationDialogComponentData,
        })
        .afterClosed()
        .pipe(take(1))
        .subscribe((result: ConfirmationDialogComponentData) => {
          if (result && result.result) {
            this.navigateToList();
          }
        });
    } else {
      this.navigateToList();
    }
  }

  navigateToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }

  navigateToEdit(id: string) {
    this.router.navigate(['../', id, 'metadata'], { relativeTo: this.route });
  }
}
