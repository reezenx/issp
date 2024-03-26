import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyAdminEditComponent } from './agency-admin-edit.component';

describe('AgencyAdminEditComponent', () => {
  let component: AgencyAdminEditComponent;
  let fixture: ComponentFixture<AgencyAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
