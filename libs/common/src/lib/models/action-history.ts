import { $Enums, ActionHistory } from '@prisma/client';
import { Assign } from './assign';

export class ActionHistoryInfo extends Assign implements ActionHistory {
  constructor() {
    super();

    Object.defineProperty(this, 'createdAt', {
      enumerable: true,
      get(): Date {
        return this._createdAt;
      },
      set(val: null | string | Date) {
        this._createdAt = !val
          ? null
          : val instanceof Date
          ? val
          : new Date(val);
      },
    });

    Object.defineProperty(this, 'userName', {
      get: () => `${this.user.firstName} ${this.user.lastName}`,
      enumerable: true,
    });

    Object.defineProperty(this, 'userRoles', {
      get: () => this.user.roles.map((role) => role.name).join(','),
      enumerable: true,
    });
  }
  changes: string[];
  parentModule: string;
  childModule: string;

  isspVersion: number;
  action: $Enums.ISSPAction;

  createdAt: Date;
  createdBy: string;
  id: string;
  status: $Enums.ISSPStatus;
  tags: string[];
  modules: string[];
  version: number;

  userId: string;
  user: {
    firstName: string;
    lastName: string;
    roles: { name: string }[];
  };

  isspId: string;
  issp: {
    title: string;
  };

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
}
