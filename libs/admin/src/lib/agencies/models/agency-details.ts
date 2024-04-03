import { Agency, Status } from '@prisma/client';
import { Assign } from '@issp/common';

export class AgencyDetails extends Assign implements Agency {
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

    Object.defineProperty(this, 'categoryName', {
      get: () => this.category?.name,
      enumerable: true,
    });
  }

  status: Status;
  uacs: string;
  departmentId: string;
  id: string;
  code: string;
  categoryId: string;
  name: string;
  email: string;
  phone: string;
  tags: string[];

  category: {
    name: string;
    id: string;
  };

  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
