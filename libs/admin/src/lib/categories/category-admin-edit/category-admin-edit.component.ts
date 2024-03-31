import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CategoriesService } from '../services/categories.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { CategoryDetails } from '../models/category-details';
import { Subscription, take } from 'rxjs';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-category-admin-edit',
  templateUrl: './category-admin-edit.component.html',
  styleUrl: './category-admin-edit.component.scss',
})
export class CategoryAdminEditComponent implements OnInit {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly categoriesService: CategoriesService,
    private readonly snackBar: MatSnackBar,
    private readonly dialog: MatDialog
  ) {}

  form: FormGroup;
  item: CategoryDetails;
  subs: Subscription[] = [];

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>('', [Validators.required]),
      code: new FormControl<string>('', [Validators.required]),
      name: new FormControl<string>('', [Validators.required]),
    });
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ item }) => {
      this.item = item;
      this.form.patchValue(this.item);
    });
    this.subs.push(routeSub);

    const currentIsspSub = this.categoriesService.currentContextItem$.subscribe(
      (data) => {
        this.item = data;
      }
    );
    this.subs.push(currentIsspSub);
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.categoriesService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe(() => {
          this.snackBar.open('Category successfully updated!', 'Ok', {
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
}
