import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISSP } from '../issp';
import { IsspService } from '../issp.service';
import { RichtextComponent } from '@issp/components';
import { MaterialModule } from '@issp/common/ui/libraries';
import { TablerIconsModule } from 'angular-tabler-icons';

@Component({
  standalone: true,
  selector: 'issp-issp-detail',
  templateUrl: './issp-detail.component.html',
  styleUrls: ['./issp-detail.component.scss'],
  imports: [MaterialModule, RichtextComponent, TablerIconsModule],
})
export class AppCourseDetailComponent {
  id: any;
  isspDetail: ISSP;

  constructor(activatedRouter: ActivatedRoute, isspService: IsspService) {
    this.id = activatedRouter?.snapshot?.paramMap?.get('id');
    this.isspDetail = isspService
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
