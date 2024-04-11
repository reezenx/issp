import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserRolesAdminComponent } from './user-roles-admin.component';

describe('UserRolesAdminComponent', () => {
  let component: UserRolesAdminComponent;
  let fixture: ComponentFixture<UserRolesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRolesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserRolesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
