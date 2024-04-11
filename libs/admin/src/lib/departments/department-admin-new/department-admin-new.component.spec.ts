import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentAdminNewComponent } from './department-admin-new.component';

describe('DepartmentAdminNewComponent', () => {
  let component: DepartmentAdminNewComponent;
  let fixture: ComponentFixture<DepartmentAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
