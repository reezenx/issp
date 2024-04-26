import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  ISSPDetails,
  ISSPP1OrgProfileS1Info,
  ISSPP1OrgProfileS2Info,
} from '@issp/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

import { P1OrgProfileS1FormComponent } from '../issp-details/p1-org-profile-s1-form/p1-org-profile-s1-form.component';
import { P1OrgProfileS2FormComponent } from '../issp-details/p1-org-profile-s2-form/p1-org-profile-s2-form.component';

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

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.parent.data.subscribe(({ item }) => {
      this.item = item;
      this.iSSPP1OrgProfileS1Info = this.item.p1OrgProfileS1 ?? {};
      this.iSSPP1OrgProfileS2Info = this.item.p1OrgProfileS2 ?? {};
      this.iSSPP1OrgProfileS1Info.isspId = this.item.id;
      this.iSSPP1OrgProfileS2Info.isspId = this.item.id;
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

  // PART I. ORGANIZATIONAL PROFILE (P1)
  /// A. DEPARTMENT/AGENCY VISION / MISSION STATEMENT (P1S1)
  iSSPP1OrgProfileS1Info: ISSPP1OrgProfileS1Info = {};
  @ViewChild(P1OrgProfileS1FormComponent)
  iSSPP1OrgProfileS1Comp: P1OrgProfileS1FormComponent;

  get iSSPP1OrgProfileS1CompForm() {
    return this.iSSPP1OrgProfileS1Comp?.form;
  }

  resetISSPP1OrgProfileS1Form() {
    this.iSSPP1OrgProfileS1CompForm.patchValue(this.iSSPP1OrgProfileS1Info);
    this.iSSPP1OrgProfileS1CompForm.markAsPristine();
  }

  saveISSPP1OrgProfileS1Form() {
    this.iSSPP1OrgProfileS1Comp.save();
  }

  /// B. DEPARTMENT/AGENCY PROFILE (P1S1)
  iSSPP1OrgProfileS2Info: ISSPP1OrgProfileS2Info = {};
  @ViewChild(P1OrgProfileS2FormComponent)
  iSSPP1OrgProfileS2Comp: P1OrgProfileS2FormComponent;

  get iSSPP1OrgProfileS2CompForm() {
    return this.iSSPP1OrgProfileS2Comp?.form;
  }

  resetISSPP1OrgProfileS2Form() {
    this.iSSPP1OrgProfileS2CompForm.patchValue(this.iSSPP1OrgProfileS2Info);
    this.iSSPP1OrgProfileS2CompForm.markAsPristine();
  }

  saveISSPP1OrgProfileS2Form() {
    this.iSSPP1OrgProfileS2Comp.save();
  }
}
