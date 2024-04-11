import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionAdminNewComponent } from './permission-admin-new.component';

describe('PermissionAdminNewComponent', () => {
  let component: PermissionAdminNewComponent;
  let fixture: ComponentFixture<PermissionAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
