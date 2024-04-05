export const API = {
  BASE: 'api/v1',
  ADMIN: {
    USERS: '/admin/users',
    CATEGORIES: '/admin/categories',
    AGENCIES: '/admin/agencies',
    PROJECTS: '/admin/projects',
    PROJECT_TYPES: '/admin/project-types',
    PROJECT_CATEGORIES: '/admin/project-categories',
    IMPL_TYPES: '/admin/project-impl-types',
    BUDGET_TYPES: '/admin/budget-types',
    BUDGET_SOURCES: '/admin/budget-sources',
  },
  USER: {
    ACCOUNTS: '/user/accounts',
    ISSPS: '/user/issps',
    ACTION_HISTORY: '/user/action-history',
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
