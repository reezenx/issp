import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TagsControlComponent } from './tags-control.component';

describe('AgencyPickerControlComponent', () => {
  let component: TagsControlComponent;
  let fixture: ComponentFixture<TagsControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TagsControlComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TagsControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
