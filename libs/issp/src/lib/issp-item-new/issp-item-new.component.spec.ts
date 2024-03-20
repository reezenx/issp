import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemNewComponent } from './issp-item-new.component';

describe('IsspItemNewComponent', () => {
  let component: IsspItemNewComponent;
  let fixture: ComponentFixture<IsspItemNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
