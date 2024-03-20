import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemComponent } from './issp-item.component';

describe('IsspItemComponent', () => {
  let component: IsspItemComponent;
  let fixture: ComponentFixture<IsspItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
