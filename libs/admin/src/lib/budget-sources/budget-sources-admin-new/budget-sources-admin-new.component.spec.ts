import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetSourcesAdminNewComponent } from './budget-sources-admin-new.component';

describe('BudgetSourcesAdminNewComponent', () => {
  let component: BudgetSourcesAdminNewComponent;
  let fixture: ComponentFixture<BudgetSourcesAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSourcesAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetSourcesAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
