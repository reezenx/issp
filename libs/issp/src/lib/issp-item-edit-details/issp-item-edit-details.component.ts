import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISSPDetails, ISSPP1OrgProfileS1Form } from '@issp/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item-edit-details',
  templateUrl: './issp-item-edit-details.component.html',
  styleUrl: './issp-item-edit-details.component.scss',
})
export class IsspItemEditDetailsComponent implements OnInit {
  item: ISSPDetails;
  subs: Subscription[] = [];
  step = 0;
  iSSPP1OrgProfileS1Form: ISSPP1OrgProfileS1Form;
  p1OrgProfileS1Instructions: string[] = [
    'A.1 - State the legal basis for the creation of the organization and should likewise describe the major functions as indicated/mandated in the legal basis.',
    'A.2 - State the wishful projection of the organization into the future; a statement of what your organization wants to become; an intuitive picture of an end state.',
    'A.3 - State the organization’s scope and operations that assert its basic purpose, specify its principal products/services that set it apart/distinguish it from others.',
    'A.4 - Enumerate the MFOs as prescribed in the Organizational Performance Indicator Framework(OPIF). An MFO is a good or service that a department/agency is mandated to deliver to external clients through the implementation of programs, activities and projects. Emphasis should be on the MFOs that are aligned with the Philippine Development Plan’s Key Result Areas and the critical indicators and results presented in the PDP Results Matrices.',
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.parent.data.subscribe(({ item }) => {
      this.item = item;
      this.iSSPP1OrgProfileS1Form = this.item.p1OrgProfileS1;
    });
    this.subs.push(routeSub);
  }

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
