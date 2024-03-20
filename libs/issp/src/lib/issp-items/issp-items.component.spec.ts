import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemsComponent } from './issp-items.component';

describe('IsspItemsComponent', () => {
  let component: IsspItemsComponent;
  let fixture: ComponentFixture<IsspItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
