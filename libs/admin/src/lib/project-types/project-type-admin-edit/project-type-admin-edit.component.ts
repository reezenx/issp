import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectTypesService } from '../services/project-types.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ProjectTypeDetails } from '../models/project-type-details';
import { Subscription, take } from 'rxjs';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';

@Component({
  selector: 'issp-project-type-admin-edit',
  templateUrl: './project-type-admin-edit.component.html',
  styleUrl: './project-type-admin-edit.component.scss',
})
export class ProjectTypeAdminEditComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly projectTypesService: ProjectTypesService,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  form: FormGroup;
  item: ProjectTypeDetails;
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
      this.projectTypesService.currentContextItem$.subscribe((data) => {
        this.item = data;
      });
    this.subs.push(currentIsspSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>('', [Validators.required]),
      name: new FormControl<string>('', [Validators.required]),
      code: new FormControl<string>('', [Validators.required]),
      updatedBy: new FormControl<string>('System'),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.projectTypesService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open('Project Type successfully updated!', 'Ok', {
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

  reset() {
    this.form.patchValue(this.item);
    this.form.markAsPristine();
  }

  navigateToList() {
    this.router.navigate(['../'], { relativeTo: this.route });
  }
}
