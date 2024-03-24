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
import { User_Status } from '@prisma/client';
import { User_Statuses } from '@issp/common';

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
  subs: Subscription[] = [];
  statusList = Object.entries(User_Statuses).map(([key]) => key);
  nameMinLength = 6;
  nameMaxLength = 100;

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ user }) => {
      this.item = user;
      this.form.patchValue(this.item);
    });
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
      password: new FormControl<string>('ChangeM3!', [Validators.required]),
      email: new FormControl<string>({ value: '', disabled: true }),
      agencyName: new FormControl<string>({ value: '', disabled: true }),
      status: new FormControl<User_Status>({
        value: User_Status.ACTIVE,
        disabled: true,
      }),
      createdAt: new FormControl<Date>({ value: null, disabled: true }),
      updatedAt: new FormControl<Date>({ value: null, disabled: true }),
    });
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
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
