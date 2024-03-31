/**
 * CASL actions available for authorization.
 * This is intended to be extended as business requirements demand.
 */
export const Action: { [key: string]: string } = {
  manage: 'manage',
  create: 'create',
  read: 'read',
  update: 'update',
  delete: 'delete',
  generate: 'generate',
} as const;
export const actions = Object.keys(Action).map((key) => Action[key]);
export type Action = (typeof Action)[keyof typeof Action];
