import { ProjectImplTypesAdminComponent } from './project-impl-types-admin.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProjectImplTypeAdminComponent', () => {
  let component: ProjectImplTypesAdminComponent;
  let fixture: ComponentFixture<ProjectImplTypesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImplTypesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectImplTypesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
