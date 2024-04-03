import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetTypesAdminNewComponent } from './budget-types-admin-new.component';

describe('BudgetTypesAdminNewComponent', () => {
  let component: BudgetTypesAdminNewComponent;
  let fixture: ComponentFixture<BudgetTypesAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetTypesAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetTypesAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
