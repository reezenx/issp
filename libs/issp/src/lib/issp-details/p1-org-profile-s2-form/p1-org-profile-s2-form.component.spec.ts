import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P1OrgProfileS2FormComponent } from './p1-org-profile-s2-form.component';

describe('P1OrgProfileS2FormComponent', () => {
  let component: P1OrgProfileS2FormComponent;
  let fixture: ComponentFixture<P1OrgProfileS2FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1OrgProfileS2FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(P1OrgProfileS2FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
