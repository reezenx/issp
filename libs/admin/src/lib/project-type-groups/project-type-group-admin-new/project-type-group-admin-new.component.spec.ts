import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTypeGroupAdminNewComponent } from './project-type-group-admin-new.component';

describe('ProjectTypeGroupAdminNewComponent', () => {
  let component: ProjectTypeGroupAdminNewComponent;
  let fixture: ComponentFixture<ProjectTypeGroupAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeGroupAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTypeGroupAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
