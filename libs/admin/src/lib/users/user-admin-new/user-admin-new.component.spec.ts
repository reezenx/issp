import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UserAdminNewComponent } from './user-admin-new.component';

describe('UserAdminNewComponent', () => {
  let component: UserAdminNewComponent;
  let fixture: ComponentFixture<UserAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
