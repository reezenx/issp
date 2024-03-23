import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemEditShellComponent } from './issp-item-edit-shell.component';

describe('IsspItemComponent', () => {
  let component: IsspItemEditShellComponent;
  let fixture: ComponentFixture<IsspItemEditShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemEditShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemEditShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
