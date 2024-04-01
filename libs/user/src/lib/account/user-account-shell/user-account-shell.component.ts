import { Component, OnInit } from '@angular/core';
import { AuthService } from '@issp/auth';
import { ViewItem } from '@issp/common';
import { User } from '@prisma/client';

@Component({
  selector: 'issp-user-account-shell',
  templateUrl: './user-account-shell.component.html',
})
export class UserAccountShellComponent implements OnInit {
  user: User;
  views: ViewItem[] = [
    {
      name: 'Dashboard',
      route: './dashboard',
      icon: 'dashboard',
      roles: ['PLANNER', 'SUPER_ADMIN'],
    },
    {
      name: 'Monitoring',
      route: './monitoring',
      icon: 'device-heart-monitor',
      roles: ['PLANNER', 'SUPER_ADMIN'],
    },
    {
      name: 'Application',
      route: './application',
      icon: 'apps-filled',
      roles: ['PLANNER', 'SUPER_ADMIN'],
    },
    {
      name: 'Amendment',
      route: './amendment',
      icon: 'replace-filled',
      roles: ['PLANNER', 'SUPER_ADMIN'],
    },
    {
      name: 'ITRA',
      route: './itra',
      icon: 'topology-star-3',
      roles: ['SUPER_ADMIN'],
    },
  ];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.views = this.views.filter((nav) =>
      this.authService.userHasRole(nav.roles)
    );
    this.user = this.authService.user;
  }
}
