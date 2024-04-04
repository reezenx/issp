import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetSourcesAdminEditComponent } from './budget-sources-admin-edit.component';

describe('BudgetSourcesAdminEditComponent', () => {
  let component: BudgetSourcesAdminEditComponent;
  let fixture: ComponentFixture<BudgetSourcesAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSourcesAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetSourcesAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
