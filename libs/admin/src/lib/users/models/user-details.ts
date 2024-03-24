import { $Enums, User } from '@prisma/client';
import { Assign } from '@issp/common';

export class UserDetails extends Assign implements User {
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

    Object.defineProperty(this, 'name', {
      get: () => `${this.firstName} ${this.lastName}`,
      enumerable: true,
    });

    Object.defineProperty(this, 'agencyName', {
      get: () => this.agency?.name,
      enumerable: true,
    });
  }
  id: string;
  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  agencyId: string;
  tags: string[];
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  role: $Enums.Role[];
  status: $Enums.User_Status;
  authoredIsspIds: string[];

  agency: {
    name: string;
  };

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
