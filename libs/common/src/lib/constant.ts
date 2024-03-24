import { ISSP_Status, User_Status, Role } from '@prisma/client';

export const ISSP_Statuses: { [key in ISSP_Status]: ISSP_Status } = {
  FOR_VALIDATION: 'FOR_VALIDATION',
  APPROVED: 'APPROVED',
  NOT_STARTED: 'NOT_STARTED',
  UNDER_REVIEW: 'UNDER_REVIEW',
  FOR_ENDORSEMENT: 'FOR_ENDORSEMENT',
};

export const User_Statuses: { [key in User_Status]: User_Status } = {
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
};
