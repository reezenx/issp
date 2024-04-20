import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IDataSet } from '@syncfusion/ej2-pivotview';
import { Subscription } from 'rxjs';

@Component({
  selector: 'issp-reports',
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.scss',
})
export class ReportsComponent implements OnInit {
  subs: Subscription[] = [];
  data: IDataSet[];

  constructor(private readonly route: ActivatedRoute) {}

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ items }) => {
      this.data = items;
    });
    this.subs.push(routeSub);
  }
}
