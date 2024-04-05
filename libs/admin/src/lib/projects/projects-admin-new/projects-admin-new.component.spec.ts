import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsAdminNewComponent } from './projects-admin-new.component';

describe('ProjectsAdminNewComponent', () => {
  let component: ProjectsAdminNewComponent;
  let fixture: ComponentFixture<ProjectsAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
