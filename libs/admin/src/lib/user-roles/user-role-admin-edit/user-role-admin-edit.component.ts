import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UserRolesService } from '../services/user-roles.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserRoleDetails } from '../models/user-role-details';
import { Subscription, take } from 'rxjs';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { ItemDropdown } from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-user-role-admin-edit',
  templateUrl: './user-role-admin-edit.component.html',
  styleUrl: './user-role-admin-edit.component.scss',
})
export class UserRoleAdminEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly userRolesService: UserRolesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  form: FormGroup;
  item: UserRoleDetails;
  permissionsDropdown: ItemDropdown[] = [];
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(
      ({ item, permissionsDropdown }) => {
        this.item = item;
        this.permissionsDropdown = permissionsDropdown;

        this.form.patchValue(this.item);
      }
    );
    this.subs.push(routeSub);

    const currentIsspSub = this.userRolesService.currentContextItem$.subscribe(
      (data) => {
        this.item = data;
      }
    );
    this.subs.push(currentIsspSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>('', [Validators.required]),
      name: new FormControl<string>('', [Validators.required]),
      permissionIds: new FormControl<string[]>([]),
    });
  }

  get f() {
    return this.form.controls;
  }
  
  save() {
    if (this.form.valid && this.form.dirty) {
      this.userRolesService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open('User Role successfully updated!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000,
          });
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

  reset() {
    this.form.patchValue(this.item);
    this.form.markAsPristine();
  }
}
