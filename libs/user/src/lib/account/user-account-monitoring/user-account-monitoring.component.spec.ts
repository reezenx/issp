import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountMonitoringComponent } from './user-account-monitoring.component';

describe('UserAccountMonitoringComponent', () => {
  let component: UserAccountMonitoringComponent;
  let fixture: ComponentFixture<UserAccountMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountMonitoringComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
