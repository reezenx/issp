import { NavItem } from '@issp/common';

export const navItems: NavItem[] = [
  {
    navCap: 'User',
    roles: ['SUPER_ADMIN'],
  },
  {
    name: 'Account',
    icon: 'user-circle',
    route: 'user/account/dashboard',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },
  {
    name: 'ISSP',
    icon: 'certificate',
    route: 'user/issps',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },
  {
    name: 'Calendar',
    icon: 'calendar-event',
    route: 'user/calendar',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },
  {
    name: 'Chat',
    icon: 'message-2',
    route: 'user/chat',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },

  {
    navCap: 'Admin',
    roles: ['SUPER_ADMIN'],
  },
  {
    name: 'Dashboard',
    icon: 'layout-dashboard',
    route: 'admin/dashboard',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Users',
    icon: 'user',
    route: 'admin/users',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Categories',
    icon: 'category',
    route: 'admin/categories',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Implementation Types',
    icon: 'browser-check',
    route: 'admin/impl-types',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Departments',
    icon: 'brand-redux',
    route: 'admin/departments',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Agencies',
    icon: 'building',
    route: 'admin/agencies',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Budget Types',
    icon: 'cash',
    route: 'admin/budget-types',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Budget Sources',
    icon: 'cash',
    route: 'admin/budget-sources',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Projects',
    icon: 'list-details',
    route: 'admin/projects',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Project Category',
    icon: 'category',
    route: 'admin/project-categories',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Pivot Table',
    icon: 'table-plus',
    route: 'admin/pivot',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Rich Text',
    icon: 'list',
    route: 'admin/richtext',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Diagram',
    icon: 'playstation-square',
    route: 'admin/diagram',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
];
