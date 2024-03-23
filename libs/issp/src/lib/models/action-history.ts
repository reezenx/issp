import { $Enums, Action_History } from '@prisma/client';
import { Assign } from '@issp/common';

export class ActionHistory extends Assign implements Action_History {
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

    Object.defineProperty(this, 'userRole', {
      get: () => this.user.role,
      enumerable: true,
    });
  }
  changes: string[];
  parentModule: string;
  childModule: string;

  isspVersion: number;
  action: $Enums.ISSP_Action;

  createdAt: Date;
  createdBy: string;
  id: string;
  status: $Enums.ISSP_Status;
  tags: string[];
  modules: string[];
  version: number;

  userId: string;
  user: {
    firstName: string;
    lastName: string;
    role: string;
  };

  isspId: string;
  issp: {
    title: string;
  };

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
}
