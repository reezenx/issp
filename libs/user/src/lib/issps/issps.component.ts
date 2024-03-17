import { Component } from '@angular/core';
import { IsspService } from './issp.service';
import { ISSP } from './issp';

@Component({
  selector: 'issp-courses',
  templateUrl: './issps.component.html',
  styleUrls: ['./issps.component.scss'],
})
export class IsspCoursesComponent {
  courseList: ISSP[] = [];
  selectedCategory = 'All';

  constructor(private courseService: IsspService) {
    this.courseList = this.courseService.getCourse();
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.courseList = this.filter(filterValue);
  }

  filter(v: string): ISSP[] {
    return this.courseService
      .getCourse()
      .filter(
        (x) => x.courseName.toLowerCase().indexOf(v.toLowerCase()) !== -1
      );
  }

  ddlChange(ob: any): void {
    const filterValue = ob.value;
    if (filterValue === 'All') {
      this.courseList = this.courseService.getCourse();
    } else {
      this.courseList = this.courseService
        .getCourse()
        // tslint:disable-next-line: no-shadowed-variable
        .filter((course) => course.courseFramework === filterValue);
    }
    // this.todos.filter(course => course.courseType==filterValue);
  }
}
