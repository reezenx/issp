import { $Enums, ISSP } from '@prisma/client';
import { Assign } from '@issp/common';

export class ISSPDetails extends Assign implements ISSP {
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
  title: string;
  description: string;
  createdAt: Date;
  status: $Enums.ISSP_Status;
  yearStart: string;
  yearEnd: string;
  tags: string[];
  agencyId: string;
  authorId: string;
  version: number;
  createdBy: string;
  updatedBy: string;
  updatedAt: Date;
  author: {
    firstName: string;
    lastName: string;
  };
  agency: {
    name: string;
  };

  get authorName() {
    return `${this.author.firstName} ${this.author.lastName}`;
  }

  get agencyName() {
    return this.agency.name;
  }

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
