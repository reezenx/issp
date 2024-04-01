import { Role as UserRole } from '@prisma/client';
import { User_Roles } from '../constant';
/**
 * Roles available for authorization.
 * This is intended to be extended as business requirements demand.
 */
export const Role: { [key: string]: UserRole } = {
  SUPER_ADMIN: 'SUPER_ADMIN',
  ADMIN: 'ADMIN',
  PLANNER: 'PLANNER',
  ASSIGNER: 'ASSIGNER',
  EVALUATOR: 'EVALUATOR',
  VALIDATOR: 'VALIDATOR',
  APPROVER: 'APPROVER',
  ENDORSER: 'ENDORSER',
} as const;

export type Role = (typeof Role)[keyof typeof Role];
