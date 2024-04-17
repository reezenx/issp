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
    name: 'ISSP',
    icon: 'certificate',
    route: 'user/issps',
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
    name: 'Agencies',
    icon: 'building',
    route: 'admin/agencies',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Agency Categories',
    icon: 'category',
    route: 'admin/categories',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Budget Types',
    icon: 'cash-banknote',
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
    name: 'Departments',
    icon: 'building-bank',
    route: 'admin/departments',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Implementation Types',
    icon: 'browser-check',
    route: 'admin/impl-types',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Permissions',
    icon: 'shield-lock',
    route: 'admin/permissions',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Projects',
    icon: 'list-details',
    route: 'admin/projects',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Project Categories',
    icon: 'category-2',
    route: 'admin/project-categories',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Project Type Groups',
    icon: 'layout-rows',
    route: 'admin/project-type-groups',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Project Types',
    icon: 'layout-list',
    route: 'admin/project-types',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Reports',
    icon: 'table-plus',
    route: 'admin/reports',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'Users',
    icon: 'user',
    route: 'admin/users',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    name: 'User Roles',
    icon: 'users-group',
    route: 'admin/user-roles',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    navCap: 'Controls',
    roles: ['SUPER_ADMIN'],
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
