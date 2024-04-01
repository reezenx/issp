import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'User',
    roles: ['SUPER_ADMIN'],
  },
  {
    displayName: 'Account',
    iconName: 'user-circle',
    route: 'user/account',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },
  {
    displayName: 'ISSP',
    iconName: 'certificate',
    route: 'user/issps',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar-event',
    route: 'user/calendar',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Chat',
    iconName: 'message-2',
    route: 'user/chat',
    roles: ['PLANNER', 'SUPER_ADMIN'],
  },

  {
    navCap: 'Admin',
    roles: ['SUPER_ADMIN'],
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: 'admin/dashboard',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Users',
    iconName: 'user',
    route: 'admin/users',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Categories',
    iconName: 'category',
    route: 'admin/categories',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Agencies',
    iconName: 'building',
    route: 'admin/agencies',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Projects',
    iconName: 'list-details',
    route: 'admin/projects',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Pivot Table',
    iconName: 'table-plus',
    route: 'admin/pivot',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Rich Text',
    iconName: 'list',
    route: 'user/richtext',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
  {
    displayName: 'Diagram',
    iconName: 'playstation-square',
    route: 'user/diagram',
    roles: ['ADMIN', 'SUPER_ADMIN'],
  },
];
