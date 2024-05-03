import { ComponentFixture, TestBed } from '@angular/core/testing';
import { P1OrgProfileS3FormComponent } from './p1-org-profile-s3-form.component';

describe('P1OrgProfileS3FormComponent', () => {
  let component: P1OrgProfileS3FormComponent;
  let fixture: ComponentFixture<P1OrgProfileS3FormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [P1OrgProfileS3FormComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(P1OrgProfileS3FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
