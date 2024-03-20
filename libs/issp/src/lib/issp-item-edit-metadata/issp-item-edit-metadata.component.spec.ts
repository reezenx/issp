import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IsspItemEditMetadataComponent } from './issp-item-edit-metadata.component';

describe('IsspItemEditMetadataComponent', () => {
  let component: IsspItemEditMetadataComponent;
  let fixture: ComponentFixture<IsspItemEditMetadataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IsspItemEditMetadataComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(IsspItemEditMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
