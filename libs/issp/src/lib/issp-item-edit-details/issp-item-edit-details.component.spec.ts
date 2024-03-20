import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemEditDetailsComponent } from './issp-item-edit-details.component';

describe('IsspItemEditDetailsComponent', () => {
  let component: IsspItemEditDetailsComponent;
  let fixture: ComponentFixture<IsspItemEditDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemEditDetailsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemEditDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
