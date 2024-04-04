import { ProjectImplTypeAdminComponent } from './admin-project-impl-types.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('ProjectImplTypeAdminComponent', () => {
  let component: ProjectImplTypeAdminComponent;
  let fixture: ComponentFixture<ProjectImplTypeAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjectImplTypeAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectImplTypeAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
