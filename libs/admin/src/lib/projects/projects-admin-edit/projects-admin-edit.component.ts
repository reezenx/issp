import { Subscription, take } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectDetails } from '../models/project-details';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { UntilDestroy } from '@ngneat/until-destroy';
import { ProjectsService } from '../services/projects.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfirmationDialogComponent,
  ConfirmationDialogComponentData,
} from '@issp/components';
import { ItemDropdown, User_Roles, User_Statuses } from '@issp/common';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-projects-admin-edit',
  templateUrl: './projects-admin-edit.component.html',
  styleUrl: './projects-admin-edit.component.scss',
})
export class ProjectsAdminEditComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private readonly router: Router,
    private readonly projectsService: ProjectsService,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {}

  agenciesDropdown: ItemDropdown[] = [];
  isspsDropdown: ItemDropdown[] = [];
  projectTypesDropdown: ItemDropdown[] = [];
  projectCategoriesDropdown: ItemDropdown[] = [];
  implementationTypesDropdown: ItemDropdown[] = [];
  budgetTypesDropdown: ItemDropdown[] = [];
  budgetSourcesDropdown: ItemDropdown[] = [];

  form: FormGroup;
  item: ProjectDetails;
  rolesList = Object.entries(User_Roles).map(([key]) => key);
  statusList = Object.entries(User_Statuses).map(([key]) => key);
  subs: Subscription[] = [];
  titleMinLength = 6;
  titleMaxLength = 100;

  ngOnInit(): void {
    this.initForm();
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(
      ({
        item,
        agenciesDropdown,
        isspsDropdown,
        projectTypesDropdown,
        projectCategoriesDropdown,
        implementationTypesDropdown,
        budgetTypesDropdown,
        budgetSourcesDropdown,
      }) => {
        this.item = item;
        this.agenciesDropdown = agenciesDropdown;
        this.isspsDropdown = isspsDropdown;
        this.projectTypesDropdown = projectTypesDropdown;
        this.projectCategoriesDropdown = projectCategoriesDropdown;
        this.implementationTypesDropdown = implementationTypesDropdown;
        this.budgetTypesDropdown = budgetTypesDropdown;
        this.budgetSourcesDropdown = budgetSourcesDropdown;

        this.form.patchValue(this.item);
      }
    );
    this.subs.push(routeSub);

    const currentItemSub = this.projectsService.currentContextItem$.subscribe(
      (item) => {
        this.item = item;
      }
    );
    this.subs.push(currentItemSub);
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>('', [Validators.required]),
      title: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      cost: new FormControl<number>(0, [
        Validators.required,
        Validators.min(1),
      ]),
      quantity: new FormControl<number>(0, [
        Validators.required,
        Validators.min(1),
      ]),
      unit: new FormControl<string>('', [Validators.required]),
      agencyId: new FormControl<string>('', [Validators.required]),
      isspId: new FormControl<string>('', [Validators.required]),
      typeId: new FormControl<string>('', [Validators.required]),
      categoryId: new FormControl<string>('', [Validators.required]),
      budgetTypeId: new FormControl<string>('', [Validators.required]),
      budgetSourceId: new FormControl<string>('', [Validators.required]),
      implementationTypeId: new FormControl<string>('', [Validators.required]),
      tags: new FormControl<string[]>([]),
    });
  }

  get f() {
    return this.form.controls;
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.projectsService
        .updateOne(this.form.value)
        .pipe(take(1))
        .subscribe((data) => {
          this.snackBar.open('Project successfully updated!', 'Ok', {
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

  reset() {
    this.form.patchValue(this.item);
    this.form.markAsPristine();
  }
}
