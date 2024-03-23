import { Component } from '@angular/core';

@Component({
  selector: 'issp-item-edit-details',
  templateUrl: './issp-item-edit-details.component.html',
  styleUrl: './issp-item-edit-details.component.scss',
})
export class IsspItemEditDetailsComponent {
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
