import { $Enums, UserRole } from '@prisma/client';
import { Assign } from '@issp/common';

export class UserRoleDetails extends Assign implements UserRole {
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

    Object.defineProperty(this, 'updatedAt', {
      enumerable: true,
      get(): Date {
        return this._updatedAt;
      },
      set(val: null | string | Date) {
        this._updatedAt = !val
          ? null
          : val instanceof Date
          ? val
          : new Date(val);
      },
    });
  }

  id: string;
  name: string;
  readOnly: boolean;
  tags: string[];
  permissionIds: string[]

  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
