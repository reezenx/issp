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

    // User for multi roles testing
    // Object.defineProperty(this, 'rolesName', {
    //   get: () => this.roles.map((role) => role.name).join(', '),
    //   enumerable: true,
    // });

    Object.defineProperty(this, 'roleName', {
      get: () => this.role.name,
      enumerable: true,
    });
  }

  agencyId: string;
  authoredIsspIds: string[];
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
  phone: string;
  readOnly: boolean;
  role: { name: string };
  roleId: string;
  roles: { name: string }[];
  sessionToken: string;
  status: $Enums.UserStatus;
  tags: string[];
  agency: { name: string };

  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
