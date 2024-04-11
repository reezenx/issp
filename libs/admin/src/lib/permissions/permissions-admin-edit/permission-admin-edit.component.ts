import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PermissionDetails } from '../models/permission-details';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { PermissionsService } from '../services/permissions.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { actions, jsonValidator, subjects } from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-permission-admin-edit',
  templateUrl: './permission-admin-edit.component.html',
  styleUrl: './permission-admin-edit.component.scss',
})
export class PermissionAdminEditComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly permissionsService: PermissionsService,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  form: FormGroup;
  item: PermissionDetails;
  actions = actions;
  subjects = subjects;
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ item }) => {
      this.item = item;
      this.form.patchValue(this.item);
    });
    this.subs.push(routeSub);

    const currentIsspSub =
      this.permissionsService.currentContextItem$.subscribe((data) => {
        this.item = data;
      });
    this.subs.push(currentIsspSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>('', [Validators.required]),
      action: new FormControl<string>('', [Validators.required]),
      subject: new FormControl<string>('', [Validators.required]),
      conditions: new FormControl<string>('{}', [jsonValidator()]),
      reason: new FormControl<string>(''),
      inverted: new FormControl<boolean>(false),
      readOnly: new FormControl<boolean>(false),
      tags: new FormControl<string[]>([]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.permissionsService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open('Permission successfully updated!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000,
          });
          this.form.markAsPristine();
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

  reset() {
    this.form.patchValue(this.item);
    this.form.markAsPristine();
  }

  navigateToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
