import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTypeAdminEditComponent } from './project-type-admin-edit.component';

describe('ProjectTypeAdminEditComponent', () => {
  let component: ProjectTypeAdminEditComponent;
  let fixture: ComponentFixture<ProjectTypeAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTypeAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
