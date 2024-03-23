import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ISSPDetails } from '../models/issp-details';
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
import { ISSP_Status } from '@prisma/client';
import {
  ISSP_Statuses,
  startYearMustBeLessThanEndYearValidator,
} from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item-add',
  templateUrl: './issp-item-add.component.html',
  styleUrl: './issp-item-add.component.scss',
})
export class IsspItemAddComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly isspService: IsspsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  form: FormGroup;
  issp: ISSPDetails;
  subs: Subscription[] = [];
  statusList = Object.entries(ISSP_Statuses).map(([key]) => key);
  titleMinLength = 6;
  titleMaxLength = 100;

  ngOnInit(): void {
    this.initForm();
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
        status: new FormControl<ISSP_Status>(ISSP_Statuses.NOT_STARTED),
        version: new FormControl<number>(1),
        tags: new FormControl<string[]>([]),
        createdBy: new FormControl<string>('System'),
        updatedBy: new FormControl<string>('System'),
        agencyId: new FormControl<string>('y5w93vwal49inqe9wb2lr6yx'),
        authorId: new FormControl<string>('q41jy6v1s8jbl95wez13wo9m'),
      },
      { validator: startYearMustBeLessThanEndYearValidator }
    );
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.isspService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('ISSP Metadata successfully created!', 'Ok', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
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
