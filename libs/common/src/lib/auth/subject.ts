/**
 * CASL actions available for authorization.
 * This is intended to be extended as business requirements demand.
 */
export const Subject = {
  User: 'User',
  UserRole: 'UserRole',
  Agency: 'Agency',
  Category: 'Category',
  Profile: 'Profile',
  Permission: 'Permission',
  ISSP: 'ISSP',
  ActionHistory: 'ActionHistory',
  ISSP_Project: 'ISSP_Project',
} as const;

export type Subject = (typeof Subject)[keyof typeof Subject];
