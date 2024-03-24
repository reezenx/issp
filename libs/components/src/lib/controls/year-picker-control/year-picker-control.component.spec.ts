import { ComponentFixture, TestBed } from '@angular/core/testing';
import { YearPickerControlComponent } from './year-picker-control.component';

describe('YearPickerControlComponent', () => {
  let component: YearPickerControlComponent;
  let fixture: ComponentFixture<YearPickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YearPickerControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(YearPickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
