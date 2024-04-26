import { Environment } from '../environment';

export const API = {
  BASE: 'api/v1',
  ADMIN: {
    AGENCIES: '/admin/agencies',
    BUDGET_SOURCES: '/admin/budget-sources',
    BUDGET_TYPES: '/admin/budget-types',
    CATEGORIES: '/admin/categories',
    DEPARTMENTS: '/admin/departments',
    IMPL_TYPES: '/admin/project-impl-types',
    PERMISSIONS: '/admin/permissions',
    PROJECT_CATEGORIES: '/admin/project-categories',
    PROJECT_TYPES: '/admin/project-types',
    PROJECT_TYPES_GROUPS: '/admin/project-type-groups',
    PROJECTS: '/admin/projects',
    USER_ROLES: '/admin/user-roles',
    USERS: '/admin/users',
  },
  USER: {
    ACCOUNTS: '/user/accounts',
    ACTION_HISTORY: '/user/action-history',
    ISSPS: '/user/issps',
    ISSP_P1ORGPROFILES1: '/user/issps/p1-org-profile-s1',
    ISSP_P1ORGPROFILES2: '/user/issps/p1-org-profile-s2',
    ISSP_P1ORGPROFILES3: '/user/issps/p1-org-profile-s3',
    ISSP_P1ORGPROFILES4: '/user/issps/p1-org-profile-s4',
    ISSP_P1ORGPROFILES5: '/user/issps/p1-org-profile-s5',
  },
  AUTH: {
    LOGIN: '/auth/login',
    REFRESH_TOKEN: '/auth/refresh-token',
    LOGOUT_ALL: '/auth/logout-from-all-devices',
    ME: '/auth/me',
    REGISTER: '/auth/register',
    ACTION_HISTORY: '/user/action-history',
  },
};

export function getAPIURL(env: Environment, url: string) {
  return `${env.url.api}${API.BASE}${url}`;
}
