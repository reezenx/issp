import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DepartmentsAdminEditComponent } from './departments-admin-edit.component';

describe('DepartmentsAdminEditComponent', () => {
  let component: DepartmentsAdminEditComponent;
  let fixture: ComponentFixture<DepartmentsAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DepartmentsAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DepartmentsAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
