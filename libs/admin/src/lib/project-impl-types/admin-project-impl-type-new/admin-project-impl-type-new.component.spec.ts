import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectImplTypeAdminNewComponent } from './admin-project-impl-type-new.component';

describe('ProjectImplTypeAdminNewComponent', () => {
  let component: ProjectImplTypeAdminNewComponent;
  let fixture: ComponentFixture<ProjectImplTypeAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImplTypeAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectImplTypeAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
