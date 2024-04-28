import { $Enums, ISSP } from '@prisma/client';
import { Assign } from '../assign';
import { ISSPP1OrgProfileS1Info } from './issp-p1-org-profile-s1-details';

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

    Object.defineProperty(this, 'authorName', {
      get: () => `${this.author.firstName} ${this.author.lastName}`,
      enumerable: true,
    });

    Object.defineProperty(this, 'agencyName', {
      get: () => this.agency.name,
      enumerable: true,
    });
  }

  agencyId: string;
  authorId: string;
  createdAt: Date;
  createdBy: string;
  description: string;
  endYear: number;
  id: string;
  readOnly: boolean;
  startYear: number;
  status: $Enums.ISSPStatus;
  scope: $Enums.ISSPScope;
  subScope: $Enums.ISSPSubScope;
  tags: string[];
  title: string;
  updatedAt: Date;
  updatedBy: string;
  version: number;

  author: {
    firstName: string;
    lastName: string;
  };

  agency: {
    name: string;
  };

  p1OrgProfileS1Id: string;
  p1OrgProfileS2Id: string;

  p1OrgProfileS1: ISSPP1OrgProfileS1Info;

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
