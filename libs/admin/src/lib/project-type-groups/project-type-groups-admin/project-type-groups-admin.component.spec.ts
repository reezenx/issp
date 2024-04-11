import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectTypeGroupsAdminComponent } from './project-type-groups-admin.component';

describe('ProjectTypeGroupsAdminComponent', () => {
  let component: ProjectTypeGroupsAdminComponent;
  let fixture: ComponentFixture<ProjectTypeGroupsAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectTypeGroupsAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectTypeGroupsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
