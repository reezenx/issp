/**
 * CASL actions available for authorization.
 * This is intended to be extended as business requirements demand.
 */
export type ActionType =
  | 'manage'
  | 'create'
  | 'read'
  | 'update'
  | 'delete'
  | 'generate';
export const Action: { [key: string]: ActionType } = {
  manage: 'manage',
  create: 'create',
  read: 'read',
  update: 'update',
  delete: 'delete',
  generate: 'generate',
} as const;
export const actions = Object.keys(Action).map((key) => Action[key]);
export type Action = (typeof Action)[keyof typeof Action];
