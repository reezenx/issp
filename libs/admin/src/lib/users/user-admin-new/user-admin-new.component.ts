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
  User_Statuses,
} from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-user-admin-new',
  templateUrl: './user-admin-new.component.html',
  styleUrl: './user-admin-new.component.scss',
})
export class UserAdminNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly usersService: UsersService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  agenciesDropdown: ItemDropdown[] = [];
  userRolesDropdown: ItemDropdown[] = [];
  form: FormGroup;
  statusList = Object.entries(User_Statuses).map(([key]) => key);
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(
      ({ agenciesDropdown, userRolesDropdown }) => {
        this.agenciesDropdown = agenciesDropdown;
        this.userRolesDropdown = userRolesDropdown;
      }
    );
    this.subs.push(routeSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      firstName: new FormControl<string>('', [Validators.required]),
      lastName: new FormControl<string>('', [Validators.required]),
      phone: new FormControl<string>('', [Validators.required]),
      password: new FormControl<string>('ChangeM3!', [Validators.required]),
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
      roleId: new FormControl<string>('', [Validators.required]),
      status: new FormControl<UserStatus>(null, [Validators.required]),
      tags: new FormControl<string[]>([]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.usersService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('User successfully created!', 'Ok', {
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
