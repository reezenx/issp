import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgenciesAdminComponent } from './agencies-admin.component';

describe('AgenciesAdminComponent', () => {
  let component: AgenciesAdminComponent;
  let fixture: ComponentFixture<AgenciesAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgenciesAdminComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgenciesAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
