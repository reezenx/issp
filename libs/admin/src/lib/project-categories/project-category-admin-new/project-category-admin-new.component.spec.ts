import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectCategoryAdminNewComponent } from './project-category-admin-new.component';

describe('ProjectCategoryAdminNewComponent', () => {
  let component: ProjectCategoryAdminNewComponent;
  let fixture: ComponentFixture<ProjectCategoryAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectCategoryAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCategoryAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
