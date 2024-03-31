/**
 * CASL actions available for authorization.
 * This is intended to be extended as business requirements demand.
 */
export const Subject: { [key: string]: string } = {
  User: 'User',
  UserRole: 'UserRole',
  Agency: 'Agency',
  Category: 'Category',
  Profile: 'Profile',
  Permission: 'Permission',
  ISSP: 'ISSP',
  ActionHistory: 'ActionHistory',
  Project: 'Project',
} as const;
export const subjects = Object.keys(Subject).map((key) => Subject[key]);
export type Subject = (typeof Subject)[keyof typeof Subject];
