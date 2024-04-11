import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserDetails } from '../models/user-details';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { UsersService } from '../services/users.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { UserStatus } from '@prisma/client';
import {
  IsKeyUniqueValidatorOptions,
  ItemDropdown,
  UniqueKeyValidator,
  User_Roles,
  User_Statuses,
} from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-user-admin-edit',
  templateUrl: './user-admin-edit.component.html',
  styleUrl: './user-admin-edit.component.scss',
})
export class UserAdminEditComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly usersService: UsersService,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  form: FormGroup;
  item: UserDetails;
  agenciesDropdown: ItemDropdown[] = [];
  userRolesDropdown: ItemDropdown[] = [];
  rolesList = Object.entries(User_Roles).map(([key]) => key);
  statusList = Object.entries(User_Statuses).map(([key]) => key);
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(
      ({ item, agenciesDropdown, userRolesDropdown }) => {
        this.item = item;
        this.agenciesDropdown = agenciesDropdown;
        this.userRolesDropdown = userRolesDropdown;
        this.form.patchValue(this.item);
      }
    );
    this.subs.push(routeSub);

    const currentIsspSub = this.usersService.currentContextItem$.subscribe(
      (data) => {
        this.item = data;
      }
    );
    this.subs.push(currentIsspSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>('', [Validators.required]),
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [
          UniqueKeyValidator<IsKeyUniqueValidatorOptions>(
            this.usersService.isEmailUnique,
            {}
          ),
        ],
      }),
      agencyId: new FormControl<string>('', [Validators.required]),
      status: new FormControl<UserStatus>(null, [Validators.required]),
      roleId: new FormControl<string>(null, [Validators.required]),
      tags: new FormControl<string[]>([]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.usersService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open('User successfully updated!', 'Ok', {
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
