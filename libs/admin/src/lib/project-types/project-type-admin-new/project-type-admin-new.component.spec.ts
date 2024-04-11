import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTypeAdminNewComponent } from './project-type-admin-new.component';

describe('ProjectTypeAdminNewComponent', () => {
  let component: ProjectTypeAdminNewComponent;
  let fixture: ComponentFixture<ProjectTypeAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTypeAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
