import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P1OrgProfileS1FormComponent } from './p1-org-profile-s1-form.component';

describe('P1OrgProfileS1FormComponent', () => {
  let component: P1OrgProfileS1FormComponent;
  let fixture: ComponentFixture<P1OrgProfileS1FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1OrgProfileS1FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(P1OrgProfileS1FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
