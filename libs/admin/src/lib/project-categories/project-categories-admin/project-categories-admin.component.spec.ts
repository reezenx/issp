import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCategoriesAdminComponent } from './project-categories-admin.component';

describe('ProjectCategoriesAdminComponent', () => {
  let component: ProjectCategoriesAdminComponent;
  let fixture: ComponentFixture<ProjectCategoriesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCategoriesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCategoriesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
