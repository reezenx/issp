import { Project } from '@prisma/client';
import { Assign } from '@issp/common';

export class ProjectDetails extends Assign implements Project {
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

    Object.defineProperty(this, 'agencyName', {
      get: () => this.agency?.name,
      enumerable: true,
    });

    Object.defineProperty(this, 'typeName', {
      get: () => this.type?.name,
      enumerable: true,
    });

    Object.defineProperty(this, 'categoryName', {
      get: () => this.category?.name,
      enumerable: true,
    });

    Object.defineProperty(this, 'implementationTypeName', {
      get: () => this.implementationType?.name,
      enumerable: true,
    });

    Object.defineProperty(this, 'budgetTypeName', {
      get: () => this.budgetType?.name,
      enumerable: true,
    });

    Object.defineProperty(this, 'budgetSourceName', {
      get: () => this.budgetSource?.name,
      enumerable: true,
    });

    Object.defineProperty(this, 'isspName', {
      get: () => this.issp?.title,
      enumerable: true,
    });
  }

  id: string;
  title: string;
  description: string;
  cost: number;
  quantity: number;
  unit: string;
  tags: string[];
  readOnly: boolean;
  isspId: string;
  typeId: string;
  categoryId: string;
  implementationTypeId: string;
  budgetTypeId: string;
  budgetSourceId: string;
  agencyId: string;

  agency: {
    name: string;
  };

  issp: {
    title: string;
  };

  type: {
    name: string;
  };

  category: {
    name: string;
  };

  implementationType: {
    name: string;
  };

  budgetType: {
    name: string;
  };

  budgetSource: {
    name: string;
  };

  createdBy: string;
  updatedBy: string;
  createdAt: Date;
  updatedAt: Date;
  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}
