import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetSourcesAdminComponent } from './budget-sources-admin.component';

describe('BudgetSourcesAdminComponent', () => {
  let component: BudgetSourcesAdminComponent;
  let fixture: ComponentFixture<BudgetSourcesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BudgetSourcesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BudgetSourcesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
