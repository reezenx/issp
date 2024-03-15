import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { course } from '../course';
import { CourseService } from '../course.service';
import { RichtextComponent } from '@issp/shared/ui/components';
import { MaterialModule } from '@issp/shared/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  standalone: true,
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
  imports: [MaterialModule, RichtextComponent, TablerIconsModule],
})
export class AppCourseDetailComponent {
  id: any;
  courseDetail: course;

  constructor(activatedRouter: ActivatedRoute, courseService: CourseService) {
    this.id = activatedRouter?.snapshot?.paramMap?.get('id');
    this.courseDetail = courseService
      .getCourse()
      .filter((x) => x?.Id === +this.id)[0];
  }

  // 3 accordian
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
