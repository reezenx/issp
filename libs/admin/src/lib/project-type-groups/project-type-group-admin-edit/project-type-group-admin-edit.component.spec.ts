import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTypeGroupAdminEditComponent } from './project-type-group-admin-edit.component';

describe('ProjectTypeGroupAdminEditComponent', () => {
  let component: ProjectTypeGroupAdminEditComponent;
  let fixture: ComponentFixture<ProjectTypeGroupAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeGroupAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTypeGroupAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
