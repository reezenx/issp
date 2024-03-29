import { ISSPStatus, UserStatus, Role } from '@prisma/client';

export const ISSP_Statuses: { [key in ISSPStatus]: ISSPStatus } = {
  FOR_VALIDATION: 'FOR_VALIDATION',
  APPROVED: 'APPROVED',
  NOT_STARTED: 'NOT_STARTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  FOR_ENDORSEMENT: 'FOR_ENDORSEMENT',
};

export const User_Statuses: { [key in UserStatus]: UserStatus } = {
  ACTIVE: 'ACTIVE',
  INACTIVE: 'INACTIVE',
  DELETED: 'DELETED',
};

export const User_Roles: {
  [key in Role]: Role;
} = {
  VIEWER: 'VIEWER',
  PLANNER: 'PLANNER',
  EVALUATOR: 'EVALUATOR',
  ENDORSER: 'ENDORSER',
  APPROVER: 'APPROVER',
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'VIEWER',
  VALIDATOR: 'VALIDATOR',
  ASSIGNER: 'ASSIGNER',
};
