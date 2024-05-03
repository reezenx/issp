import { ClickEventArgs } from '@syncfusion/ej2-angular-navigations';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { GridDefaults } from '@issp/common/ui/libraries';
import { UntilDestroy } from '@ngneat/until-destroy';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ISSPP1OrgProfileS2Info } from '@issp/common';
import { Observable, Subscription, take, zip } from 'rxjs';
import { IsspP1OrgProfileS2Service } from '../../services/issp.p1-org-profile-s2.service';
import { $Enums } from '@prisma/client';

import {
  ColumnModel,
  DialogEditEventArgs,
  EditSettingsModel,
  FilterSettingsModel,
  GridComponent,
  GroupSettingsModel,
  IEditCell,
  PageSettingsModel,
  PdfExportProperties,
  ResizeSettingsModel,
  SaveEventArgs,
  ToolbarItems,
} from '@syncfusion/ej2-angular-grids';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-p1-org-profile-s2-form',
  templateUrl: './p1-org-profile-s2-form.component.html',
  styleUrl: './p1-org-profile-s2-form.component.scss',
})
export class P1OrgProfileS2FormComponent implements OnInit {
  form: FormGroup;
  subs: Subscription[] = [];
  SCOPES = $Enums.ISSPScope;
  submitClicked = false;

  // Grid
  @ViewChild('itemsGrid', { static: true })
  grid: GridComponent;
  gridId = 'itemsGrid';
  gridData: Array<ISSPP1OrgProfileS2Info> = new Array<ISSPP1OrgProfileS2Info>();
  gridPageSettings: PageSettingsModel = new GridDefaults();
  resizeSettings: ResizeSettingsModel = { mode: 'Normal' };
  filterSettings: FilterSettingsModel = { type: 'Excel' };
  editSettings?: EditSettingsModel = {
    allowEditing: true,
    allowAdding: true,
    allowDeleting: true,
    showDeleteConfirmDialog: true,
  };
  sortSettings = { columns: [{ field: 'createdAt', direction: 'Descending' }] };
  toolbar: ToolbarItems[] = [
    // 'Print',
    'ExcelExport',
    // 'PdfExport',
    'Add',
    'Edit',
    'Delete',
    'Update',
    'Cancel',
    'Search',
    'ColumnChooser',
  ];
  groupSettings: GroupSettingsModel = {
    showDropArea: false,
  };
  loadingIndicator: {
    indicatorType: string;
  };
  designatedISPlannerColumns: ColumnModel[];
  requiredRule = { required: true };
  b1EmailRule = { ...this.requiredRule, email: true };
  b3TotalNoEmpRule = { ...this.requiredRule, min: 1 };
  b2AnnualICTBudgetRule = { ...this.requiredRule, min: 1, number: true };
  numericParams: IEditCell = {
    params: {
      validateDecimalOnType: true,
      decimals: 0,
      format: 'N',
    },
  };
  stringParams: IEditCell = {
    params: {
      showClearButton: true,
    },
  };

  @Input()
  isspId: string = null;

  _scope: $Enums.ISSPScope = null;
  @Input()
  get scope() {
    return this._scope;
  }
  set scope(val: $Enums.ISSPScope) {
    this._scope = val;
    if (this.isDepartmentWide()) {
      this.initISSPPlannerColumn();
      this.form = this.createDepartmentWideFormGroup({});
    } else {
      this.initForm();
    }
  }

  _items: ISSPP1OrgProfileS2Info[];
  @Input()
  get items() {
    return this._items;
  }
  set items(val: ISSPP1OrgProfileS2Info[]) {
    this._items = val;
    if (this.isDepartmentWide()) {
      this.gridData = val;
    } else {
      this.form.patchValue(val[0]);
    }
  }

  constructor(
    private formBuilder: FormBuilder,
    private readonly isspP1OrgProfileS2Service: IsspP1OrgProfileS2Service,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadingIndicator = { indicatorType: 'Shimmer' };
  }

  initISSPPlannerColumn() {
    this.designatedISPlannerColumns = [
      {
        field: 'b1PlannerName',
        headerText: 'Name',
        width: 130,
        minWidth: 10,
        edit: this.stringParams,
        validationRules: this.requiredRule,
      },
      {
        field: 'b1PlantillaPosition',
        headerText: 'Plantilla Position',
        width: 120,
        minWidth: 10,
        edit: this.stringParams,
        validationRules: this.requiredRule,
      },
      {
        field: 'b1Email',
        headerText: 'Email Address',
        width: 120,
        minWidth: 10,
        edit: this.stringParams,
        validationRules: this.b1EmailRule,
      },
      {
        field: 'b1Contacts',
        headerText: 'Contact Number',
        width: 120,
        minWidth: 10,
        edit: this.stringParams,
        validationRules: this.requiredRule,
      },
    ];
  }

  initForm() {
    this.form = this.formBuilder.group({
      id: new FormControl<string>(null),
      isspId: new FormControl<string>(null),
      b1AgencyHeadName: new FormControl<string>(''),
      b1PlannerName: new FormControl<string>(null, [Validators.required]),
      b1PlantillaPosition: new FormControl<string>(null, [Validators.required]),
      b1OrgUnit: new FormControl<string>(null, [Validators.required]),
      b1Email: new FormControl<string>(null, [
        Validators.required,
        Validators.email,
      ]),
      b1Contacts: new FormControl<string>(null, [Validators.required]),
      b2AnnualICTBudget: new FormControl<number>(0, [
        Validators.required,
        Validators.min(1),
      ]),
      b2OtherSources: new FormControl<string>(null),
      b3TotalNoEmp: new FormControl<number>(null, [Validators.required]),
      b3NoRegionalOffices: new FormControl<number>(null, [Validators.required]),
      b3NoProvOffices: new FormControl<number>(null, [Validators.required]),
      b3NoOthersOffices: new FormControl<number>(null, [Validators.required]),
    });
  }

  get f() {
    return this.form.controls;
  }

  toolbarClick(args: ClickEventArgs) {
    if (args.item) {
      if (args.item.id === this.gridId + '_excelexport') {
        (this.grid as GridComponent).excelExport();
      }
      if (args.item.id === this.gridId + '_pdfexport') {
        const pdfExportProperties: PdfExportProperties = {
          exportType: 'CurrentPage',
          allowHorizontalOverflow: true,
          pageOrientation:
            'Landscape' as PdfExportProperties['pageOrientation'],
        };
        (this.grid as GridComponent).pdfExport(pdfExportProperties);
      }
    }
  }

  created(): void {
    (
      document.getElementById(this.gridId + '_searchbar') as Element
    ).addEventListener('keyup', () => {
      (this.grid as GridComponent).search(
        ((event as MouseEvent).target as HTMLInputElement).value
      );
    });
  }

  save() {
    if (this.form.valid && this.form.dirty) {
      this.createUpdate(this.form.value.id, this.form.value);
    }
  }

  createUpdate(id: string, data: ISSPP1OrgProfileS2Info) {
    data.isspId = this.isspId;
    data.b2OtherSources = '';
    data.b3NoRegionalOffices = 0;
    data.b3NoProvOffices = 0;
    data.b3NoOthersOffices = 0;
    const obs = id
      ? this.isspP1OrgProfileS2Service.updateOne(data)
      : this.isspP1OrgProfileS2Service.createOne(data);
    obs.pipe(take(1)).subscribe(() => {
      this.form.markAsPristine();
      this.snackBar.open(
        'Department/Agency Profile (P1S2) successfully saved!',
        'Ok',
        {
          horizontalPosition: 'center',
          verticalPosition: 'bottom',
          duration: 5000,
        }
      );
    });
  }

  delete(items: ISSPP1OrgProfileS2Info[]) {
    const subArray: Observable<ISSPP1OrgProfileS2Info>[] = [];
    items.forEach((item) => {
      subArray.push(this.isspP1OrgProfileS2Service.remove(item.id));
    });
    zip(...subArray)
      .pipe(take(1))
      .subscribe(() => {
        this.snackBar.open(
          'Department/Agency Profile (P1S2) successfully deleted!',
          'Ok',
          {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000,
          }
        );
      });
  }

  isDepartmentWide(): boolean {
    return this.scope === this.SCOPES.DEPARTMENT_WIDE;
  }

  createDepartmentWideFormGroup(data: ISSPP1OrgProfileS2Info): FormGroup {
    return new FormGroup({
      id: new FormControl<string>(data.id),
      isspId: new FormControl<string>(data.isspId),
      b1AgencyHeadName: new FormControl<string>(data.b1AgencyHeadName, [
        Validators.required,
      ]),
      b1PlannerName: new FormControl<string>(data.b1PlannerName, [
        Validators.required,
      ]),
      b1PlantillaPosition: new FormControl<string>(data.b1PlantillaPosition, [
        Validators.required,
      ]),
      b1OrgUnit: new FormControl<string>(data.b1OrgUnit, [Validators.required]),
      b1Email: new FormControl<string>(data.b1Email, [
        Validators.required,
        Validators.email,
      ]),
      b1Contacts: new FormControl<string>(data.b1Contacts, [
        Validators.required,
      ]),
      b2AnnualICTBudget: new FormControl<number>(data.b2AnnualICTBudget, [
        Validators.required,
        Validators.min(1),
      ]),
      b3TotalNoEmp: new FormControl<number>(data.b3TotalNoEmp, [
        Validators.required,
      ]),
    });
  }

  actionBegin(args: SaveEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      this.submitClicked = false;
      this.form = this.createDepartmentWideFormGroup(args.rowData);
    }
    if (args.requestType === 'save') {
      this.submitClicked = true;
      const data = args.data as ISSPP1OrgProfileS2Info;
      this.createUpdate(data.id, data);
    }
    if (args.requestType === 'delete') {
      this.submitClicked = true;
      const data = args.data as ISSPP1OrgProfileS2Info[];
      this.delete(data);
    }
  }

  actionComplete(args: DialogEditEventArgs): void {
    if (args.requestType === 'beginEdit' || args.requestType === 'add') {
      //empty
    }
  }
}
