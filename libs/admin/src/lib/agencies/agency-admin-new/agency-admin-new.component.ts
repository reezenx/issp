import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AgencyDetails } from '../models/agency-details';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { AgenciesService } from '../services/agencies.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import {
  ItemDropdown,
  UniqueKeyValidator,
  IsKeyUniqueValidatorOptions,
} from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-agency-admin-new',
  templateUrl: './agency-admin-new.component.html',
  styleUrl: './agency-admin-new.component.scss',
})
export class AgencyAdminNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly agenciesService: AgenciesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  categoriesDropdown: ItemDropdown[] = [];
  departmentsDropdown: ItemDropdown[] = [];

  form: FormGroup;
  issp: AgencyDetails;
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(
      ({ categoriesDropdown, departmentsDropdown }) => {
        this.categoriesDropdown = categoriesDropdown;
        this.departmentsDropdown = departmentsDropdown;
      }
    );
    this.subs.push(routeSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: new FormControl<string>('', [Validators.required]),
      code: new FormControl<string>('', {
        validators: [Validators.required],
        asyncValidators: [
          UniqueKeyValidator<IsKeyUniqueValidatorOptions>(
            this.agenciesService.isCodeUnique,
            {}
          ),
        ],
      }),
      phone: new FormControl<string>('', [Validators.required]),
      email: new FormControl<string>('', {
        validators: [Validators.required, Validators.email],
        asyncValidators: [
          UniqueKeyValidator<IsKeyUniqueValidatorOptions>(
            this.agenciesService.isEmailUnique,
            {}
          ),
        ],
      }),
      categoryId: new FormControl<string>('', [Validators.required]),
      // uacs: new FormControl<string>('12345', [Validators.required]),
      departmentId: new FormControl<string>('', [Validators.required]),
      tags: new FormControl<string[]>([]),
      createdBy: new FormControl<string>('System'),
      updatedBy: new FormControl<string>('System'),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.agenciesService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('Agency successfully created!', 'Ok', {
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
