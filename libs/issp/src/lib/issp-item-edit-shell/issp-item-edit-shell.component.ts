import { Component, OnInit } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { Subscription } from 'rxjs';
import { IsspsService } from '../services/issps.service';
import { ActivatedRoute } from '@angular/router';
import { ISSPDetails, UserAbility } from '@issp/common';
import { AuthService } from '@issp/auth';

@UntilDestroy({ arrayName: 'subs' })
@Component({
  selector: 'issp-item',
  templateUrl: './issp-item-edit-shell.component.html',
})
export class IsspItemEditShellComponent implements OnInit {
  item: ISSPDetails;
  subs: Subscription[] = [];
  readonly ability: UserAbility;
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

  constructor(
    private isspsService: IsspsService,
    private route: ActivatedRoute,
    authService: AuthService
  ) {
    this.ability = authService.ability;
  }

  ngOnInit() {
    this.initSubs();
  }

  initSubs() {
    const routeSub = this.route.data.subscribe(({ item }) => {
      this.item = item;
    });
    this.subs.push(routeSub);

    const currentIsspSub = this.isspsService.currentContextItem$.subscribe(
      (data) => {
        this.item = data;
      }
    );
    this.subs.push(currentIsspSub);
  }
}
