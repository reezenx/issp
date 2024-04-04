import { ProjectImplTypeAdminEditComponent } from './admin-project-impl-type-edit.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProjectImplTypeAdminEditComponent', () => {
  let component: ProjectImplTypeAdminEditComponent;
  let fixture: ComponentFixture<ProjectImplTypeAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImplTypeAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectImplTypeAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
