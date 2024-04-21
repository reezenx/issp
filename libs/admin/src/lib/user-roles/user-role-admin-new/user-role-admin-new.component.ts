import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserRolesService } from '../services/user-roles.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UserRoleDetails } from '../models/user-role-details';
import { Subscription, take } from 'rxjs';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ItemDropdown } from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-user-role-admin-new',
  templateUrl: './user-role-admin-new.component.html',
  styleUrl: './user-role-admin-new.component.scss',
})
export class UserRoleAdminNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly userRolesService: UserRolesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  permissionsDropdown: ItemDropdown[] = [];
  form: FormGroup;
  issp: UserRoleDetails;
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initSubs();
    this.initForm();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ permissionsDropdown }) => {
      this.permissionsDropdown = permissionsDropdown;
    });
    this.subs.push(routeSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: new FormControl<string>('', [Validators.required]),
      permissionIds: new FormControl<string[]>([]),
      tags: new FormControl<string[]>([]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.userRolesService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('User Role successfully created!', 'Ok', {
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
    this.router.navigate(['../', id], { relativeTo: this.route });
  }
}
