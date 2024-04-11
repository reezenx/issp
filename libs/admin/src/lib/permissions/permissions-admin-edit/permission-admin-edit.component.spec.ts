import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionAdminEditComponent } from './permission-admin-edit.component';

describe('PermissionAdminEditComponent', () => {
  let component: PermissionAdminEditComponent;
  let fixture: ComponentFixture<PermissionAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
