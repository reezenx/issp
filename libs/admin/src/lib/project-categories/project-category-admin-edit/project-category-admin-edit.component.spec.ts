import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCategoryAdminEditComponent } from './project-category-admin-edit.component';

describe('ProjectCategoryAdminEditComponent', () => {
  let component: ProjectCategoryAdminEditComponent;
  let fixture: ComponentFixture<ProjectCategoryAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCategoryAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCategoryAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
