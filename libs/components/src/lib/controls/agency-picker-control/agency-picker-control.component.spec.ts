import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AgencyPickerControlComponent } from './agency-picker-control.component';

describe('AgencyPickerControlComponent', () => {
  let component: AgencyPickerControlComponent;
  let fixture: ComponentFixture<AgencyPickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgencyPickerControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AgencyPickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
