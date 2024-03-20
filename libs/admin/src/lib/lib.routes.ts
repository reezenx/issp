import { Routes } from '@angular/router';
import { IsspDashboardComponent } from './dashboard/dashboard.component';
import { IsspUsersComponent } from './users/users.component';
import { IsspProjectsComponent } from './projects/projects.component';

export const AdminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: IsspDashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'users',
    component: IsspUsersComponent,
    data: {
      title: 'Users',
    },
  },
  {
    path: 'projects',
    component: IsspProjectsComponent,
    data: {
      title: 'Projects',
    },
  },
];
