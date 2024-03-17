import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'User',
  },
  {
    displayName: 'Account',
    iconName: 'user-circle',
    route: 'user/account',
  },
  {
    displayName: 'ISSP',
    iconName: 'certificate',
    route: 'user/issp',
  },
  {
    displayName: 'Calendar',
    iconName: 'calendar-event',
    route: 'user/calendar',
  },
  {
    displayName: 'Chat',
    iconName: 'message-2',
    route: 'user/chat',
  },
  {
    displayName: 'Rich Text',
    iconName: 'list',
    route: 'user/richtext',
  },
  {
    displayName: 'Diagram',
    iconName: 'playstation-square',
    route: 'user/diagram',
  },
  {
    navCap: 'Admin',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: 'admin/dashboard',
  },
  {
    displayName: 'Users',
    iconName: 'user',
    route: 'admin/users',
  },
  {
    displayName: 'Projects',
    iconName: 'list-details',
    route: 'admin/projects',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/auth/login',
  },
  {
    displayName: 'Register',
    iconName: 'lock',
    route: 'auth/register',
  },
  {
    displayName: 'Forgot Password',
    iconName: 'lock',
    route: 'auth/forgot-pwd',
  },
  {
    displayName: 'Two Steps',
    iconName: 'lock',
    route: 'auth/two-steps',
  },
  {
    displayName: 'Error',
    iconName: 'alert-circle',
    route: 'auth/error',
  },
  {
    displayName: 'Maintenance',
    iconName: 'settings',
    route: 'auth/maintenance',
  },
  {
    displayName: 'Roll Base Access',
    iconName: 'lock-access',
    route: 'user/permission',
  },
];
