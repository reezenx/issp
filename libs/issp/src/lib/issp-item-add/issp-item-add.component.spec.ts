import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemAddComponent } from './issp-item-add.component';

describe('IsspItemNewComponent', () => {
  let component: IsspItemAddComponent;
  let fixture: ComponentFixture<IsspItemAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemAddComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
