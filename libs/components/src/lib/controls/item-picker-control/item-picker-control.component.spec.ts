import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemPickerControlComponent } from './item-picker-control.component';

describe('AgencyPickerControlComponent', () => {
  let component: ItemPickerControlComponent;
  let fixture: ComponentFixture<ItemPickerControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ItemPickerControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemPickerControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
