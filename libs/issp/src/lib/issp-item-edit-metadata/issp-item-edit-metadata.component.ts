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
import { ISSPStatus } from '@prisma/client';
import {
  ISSP_Statuses,
  ISSPDetails,
  startYearMustBeLessThanEndYearValidator,
} from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item-edit-metadata',
  templateUrl: './issp-item-edit-metadata.component.html',
  styleUrl: './issp-item-edit-metadata.component.scss',
})
export class IsspItemEditMetadataComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly isspService: IsspsService,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  form: FormGroup;
  item: ISSPDetails;
  subs: Subscription[] = [];
  statusList = Object.entries(ISSP_Statuses).map(([key]) => key);
  titleMinLength = 6;
  titleMaxLength = 100;

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.parent.data.subscribe(({ item }) => {
      this.item = item;
      this.form.patchValue(this.item);
    });
    this.subs.push(routeSub);
  }

  initForm() {
    this.form = this.formBuilder.group(
      {
        id: new FormControl<string>('', [Validators.required]),
        title: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(this.titleMinLength),
          Validators.maxLength(this.titleMaxLength),
        ]),
        description: new FormControl<string>('', [Validators.required]),
        endYear: new FormControl<number>(null, [Validators.required]),
        startYear: new FormControl<number>(null, [Validators.required]),
        authorName: new FormControl<string>({ value: '', disabled: true }),
        agencyName: new FormControl<string>({ value: '', disabled: true }),
        status: new FormControl<ISSPStatus>({
          value: ISSP_Statuses.NOT_STARTED,
          disabled: true,
        }),
        version: new FormControl<number>({ value: null, disabled: true }),
        tags: new FormControl<string[]>([]),
      },
      { validator: startYearMustBeLessThanEndYearValidator }
    );
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.isspService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open('ISSP Metadata successfully updated!', 'Ok', {
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
    this.router.navigate(['../../'], { relativeTo: this.route });
  }
}
