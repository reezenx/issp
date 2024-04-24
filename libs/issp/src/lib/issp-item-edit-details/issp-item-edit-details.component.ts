import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISSPDetails, ISSPP1OrgProfileS1Info } from '@issp/common';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { P1OrgProfileS1FormComponent } from '../issp-details/p1-org-profile-s1-form/p1-org-profile-s1-form.component';

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
      this.iSSPP1OrgProfileS1Info.isspId = this.item.id;
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
  /// A. DEPARTMENT/AGENCY VISION / MISSION STATEMENT (S1)
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
}
