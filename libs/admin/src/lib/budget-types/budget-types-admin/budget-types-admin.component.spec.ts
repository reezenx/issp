import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetTypesAdminComponent } from './budget-types-admin.component';

describe('BudgetTypesAdminComponent', () => {
  let component: BudgetTypesAdminComponent;
  let fixture: ComponentFixture<BudgetTypesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetTypesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetTypesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
