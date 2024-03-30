import { CategoryAdminNewComponent } from './category-admin-new.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('CategoryAdminNewComponent', () => {
  let component: CategoryAdminNewComponent;
  let fixture: ComponentFixture<CategoryAdminNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryAdminNewComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryAdminNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
