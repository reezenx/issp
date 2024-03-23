import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ISSPDetails } from '../models/issp-details';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item',
  templateUrl: './issp-item.component.html',
  styleUrl: './issp-item.component.scss',
})
export class IsspItemComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  issp: ISSPDetails;
  subs: Subscription[] = [];

  views = [
    {
      name: 'Metadata',
      route: './metadata',
      iconName: 'list',
    },
    {
      name: 'Details',
      route: './edit',
      iconName: 'list-details',
    },
    {
      name: 'History',
      route: './history',
      iconName: 'history',
    },
  ];

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ issp }) => {
      this.issp = issp;
    });
    this.subs.push(routeSub);
  }
}
