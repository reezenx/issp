export const API = {
  BASE: 'api/v1',
  ADMIN: {
    USERS: '/admin/users',
    CATEGORIES: '/admin/categories',
    AGENCIES: '/admin/agencies',
    PROJECT_TYPES: '/admin/project-types',
    PROJECT_CATEGORIES: '/admin/project-categories',
    IMPL_TYPES: '/admin/impl-types',
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
    ME: '/auth/me',
    REGISTER: '/auth/register',
    ACTION_HISTORY: '/user/action-history',
  },
};
