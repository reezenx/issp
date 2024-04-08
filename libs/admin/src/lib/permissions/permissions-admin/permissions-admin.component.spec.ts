import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PermissionsAdminComponent } from './permissions-admin.component';

describe('PermissionsAdminComponent', () => {
  let component: PermissionsAdminComponent;
  let fixture: ComponentFixture<PermissionsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PermissionsAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PermissionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
