import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRoleAdminEditComponent } from './user-role-admin-edit.component';

describe('UserRoleAdminEditComponent', () => {
  let component: UserRoleAdminEditComponent;
  let fixture: ComponentFixture<UserRoleAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoleAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRoleAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
