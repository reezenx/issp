import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemEditPreviewComponent } from './issp-item-edit-history.component';

describe('IsspItemEditPreviewComponent', () => {
  let component: IsspItemEditPreviewComponent;
  let fixture: ComponentFixture<IsspItemEditPreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemEditPreviewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemEditPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
