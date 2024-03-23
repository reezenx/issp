import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { ProjectsComponent } from './projects/projects.component';
import { PivotTableAdvComponent } from './pivot-table/pivot-table.component';

export const AdminRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: {
      title: 'Dashboard',
    },
  },
  {
    path: 'users',
    component: UsersComponent,
    data: {
      title: 'Users',
    },
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: {
      title: 'Projects',
    },
  },
  {
    path: 'pivot',
    component: PivotTableAdvComponent,
    data: {
      title: 'Pivot Table',
    },
  },
];
