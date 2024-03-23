import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemsShellComponent } from './issp-items-shell.component';

describe('IsspItemsShellComponent', () => {
  let component: IsspItemsShellComponent;
  let fixture: ComponentFixture<IsspItemsShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemsShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemsShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
