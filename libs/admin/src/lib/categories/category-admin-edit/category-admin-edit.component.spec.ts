import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryAdminEditComponent } from './category-admin-edit.component';



describe('CategoryAdminEditComponent', () => {
  let component: CategoryAdminEditComponent;
  let fixture: ComponentFixture<CategoryAdminEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryAdminEditComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CategoryAdminEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
