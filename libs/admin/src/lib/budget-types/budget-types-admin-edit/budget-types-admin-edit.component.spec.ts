import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetTypesAdminEditComponent } from './budget-types-admin-edit.component';

describe('BudgetTypesAdminEditComponent', () => {
  let component: BudgetTypesAdminEditComponent;
  let fixture: ComponentFixture<BudgetTypesAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetTypesAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetTypesAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
