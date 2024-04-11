import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTypesAdminComponent } from './project-types-admin.component';

describe('ProjectTypesAdminComponent', () => {
  let component: ProjectTypesAdminComponent;
  let fixture: ComponentFixture<ProjectTypesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTypesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
