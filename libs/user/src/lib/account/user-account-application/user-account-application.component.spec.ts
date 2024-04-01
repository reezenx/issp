import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountApplicationComponent } from './user-account-application.component';

describe('UserAccountApplicationComponent', () => {
  let component: UserAccountApplicationComponent;
  let fixture: ComponentFixture<UserAccountApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountApplicationComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
