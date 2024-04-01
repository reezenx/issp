import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAccountItraComponent } from './user-account-itra.component';

describe('UserAccountItraComponent', () => {
  let component: UserAccountItraComponent;
  let fixture: ComponentFixture<UserAccountItraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAccountItraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAccountItraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
