import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsAdminEditComponent } from './projects-admin-edit.component';

describe('ProjectsAdminEditComponent', () => {
  let component: ProjectsAdminEditComponent;
  let fixture: ComponentFixture<ProjectsAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectsAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
