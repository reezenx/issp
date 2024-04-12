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
  selector: 'issp-project-type-admin-new',
  templateUrl: './project-type-admin-new.component.html',
  styleUrl: './project-type-admin-new.component.scss',
})
export class ProjectTypeAdminNewComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly projectTypesService: ProjectTypesService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  form: FormGroup;
  issp: ProjectTypeDetails;
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.formBuilder.group({
      name: new FormControl<string>('', [Validators.required]),
      code: new FormControl<string>('', [Validators.required]),
      tags: new FormControl<string[]>([]),
      createdBy: new FormControl<string>('System'),
      updatedBy: new FormControl<string>('System'),
    });
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.projectTypesService
        .createOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('Project Type successfully created!', 'Ok', {
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
