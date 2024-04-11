import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRoleAdminNewComponent } from './user-role-admin-new.component';

describe('UserRoleAdminNewComponent', () => {
  let component: UserRoleAdminNewComponent;
  let fixture: ComponentFixture<UserRoleAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRoleAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRoleAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
