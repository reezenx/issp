import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RichTextControlComponent } from './rich-text-control.component';

describe('RichTextControlComponent', () => {
  let component: RichTextControlComponent;
  let fixture: ComponentFixture<RichTextControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RichTextControlComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RichTextControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
