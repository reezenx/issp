import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountAmendmentComponent } from './user-account-amendment.component';

describe('UserAccountAmendmentComponent', () => {
  let component: UserAccountAmendmentComponent;
  let fixture: ComponentFixture<UserAccountAmendmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountAmendmentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountAmendmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
