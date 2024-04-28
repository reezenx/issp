import {
  ISSPStatus,
  UserStatus,
  Role,
  ISSPScope,
  ISSPSubScope,
} from '@prisma/client';

export const ISSP_Statuses: { [key in ISSPStatus]: ISSPStatus } = {
  FOR_VALIDATION: 'FOR_VALIDATION',
  APPROVED: 'APPROVED',
  NOT_STARTED: 'NOT_STARTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  FOR_ENDORSEMENT: 'FOR_ENDORSEMENT',
};

export const ISSP_Scopes: { [key in ISSPScope]: ISSPScope } = {
  DEPARTMENT_WIDE: 'DEPARTMENT_WIDE',
  DEPARTMENT_CENTRAL_HEAD_OFFICE: 'DEPARTMENT_CENTRAL_HEAD_OFFICE',
  AGENCY_WIDE: 'AGENCY_WIDE',
};

export const ISSP_SubScopes: { [key in ISSPSubScope]: ISSPSubScope } = {
  CENTRAL_OFFICE_ONLY: 'CENTRAL_OFFICE_ONLY',
  WITH_REGIONAL_FIELD_OFFICES: 'WITH_REGIONAL_FIELD_OFFICES',
  WITH_BUREAUS: 'WITH_BUREAUS',
};

export const User_Statuses: { [key in UserStatus]: UserStatus } = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED',
};

export const User_Roles: {
  [key in Exclude<Role, 'SUPER_ADMIN'>]: Role;
} = {
  VIEWER: 'VIEWER',
  PLANNER: 'PLANNER',
  EVALUATOR: 'EVALUATOR',
  ENDORSER: 'ENDORSER',
  APPROVER: 'APPROVER',
  ADMIN: 'ADMIN',
  VALIDATOR: 'VALIDATOR',
  ASSIGNER: 'ASSIGNER',
};
