/**
 * CASL actions available for authorization.
 * This is intended to be extended as business requirements demand.
 */
export type SubjectType =
  | 'User'
  | 'UserRole'
  | 'Agency'
  | 'Category'
  | 'Profile'
  | 'Permission'
  | 'ISSP'
  | 'ISSPP1OrgProfileS1'
  | 'ISSPP1OrgProfileS2'
  | 'ISSPP1OrgProfileS3'
  | 'ISSPP1OrgProfileS4'
  | 'ISSPP1OrgProfileS5'
  | 'ActionHistory'
  | 'Project'
  | 'ProjectType'
  | 'ProjectTypeGroup'
  | 'ImplementationType'
  | 'ProjectCategory'
  | 'BudgetType'
  | 'BudgetSource'
  | 'Department';
export const Subject: { [key: string]: SubjectType } = {
  User: 'User',
  UserRole: 'UserRole',
  Agency: 'Agency',
  Category: 'Category',
  Profile: 'Profile',
  Permission: 'Permission',
  ISSP: 'ISSP',
  ISSPP1OrgProfileS1: 'ISSPP1OrgProfileS1',
  ActionHistory: 'ActionHistory',
  Project: 'Project',
  ProjectType: 'ProjectType',
  ProjectTypeGroup: 'ProjectTypeGroup',
  ImplementationType: 'ImplementationType',
  ProjectCategory: 'ProjectCategory',
  BudgetType: 'BudgetType',
  BudgetSource: 'BudgetSource',
} as const;
export const subjects = Object.keys(Subject).map((key) => Subject[key]);
export type Subject = (typeof Subject)[keyof typeof Subject];
