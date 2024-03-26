import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyAdminNewComponent } from './agency-admin-new.component';

describe('AgencyAdminNewComponent', () => {
  let component: AgencyAdminNewComponent;
  let fixture: ComponentFixture<AgencyAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
