import { Component, OnInit } from '@angular/core';
import { ISSPDetails } from '../models/issp-details';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { IsspsService } from '../services/issps.service';
import { ActivatedRoute } from '@angular/router';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item',
  templateUrl: './issp-item-edit-shell.component.html',
})
export class IsspItemEditShellComponent implements OnInit {
  constructor(
    private isspsService: IsspsService,
    private route: ActivatedRoute
  ) {}
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

    const currentIsspSub = this.isspsService.currentContextItem$.subscribe(
      (data) => {
        this.issp = data;
      }
    );
    this.subs.push(currentIsspSub);
  }
}
