import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountDashboardComponent } from './user-account-dashboard.component';

describe('UserAccountDashboardComponent', () => {
  let component: UserAccountDashboardComponent;
  let fixture: ComponentFixture<UserAccountDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountDashboardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
