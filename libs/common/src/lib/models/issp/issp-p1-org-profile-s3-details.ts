import { ISSPP1OrgProfileS2 } from '@prisma/client';
import { Assign } from '../assign';
import { ISSPDetails } from './issp-details';

export class ISSPP1OrgProfileS3Details
  extends Assign
  implements ISSPP1OrgProfileS2
{
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
  b1PlannerName: string;
  b1PlantillaPosition: string;
  b1OrgUnit: string;
  b1Email: string;
  b1AgencyHeadName: string;
  b1Contacts: string;
  b2AnnualICTBudget: number;
  b2OtherSources: string;
  b3TotalNoEmp: number;
  b3NoRegionalOffices: number;
  b3NoProvOffices: number;
  b3NoOthersOffices: number;
  order: number;
  part: number;
  isspId: string | null;
  issp: ISSPDetails | null;
  readOnly: boolean;
  tags: string[];
  title: string;
  createdAt: Date;
  updatedAt: Date;
  createdBy: string;
  updatedBy: string;

  private _createdAt: Date = new Date('0001-01-01T00:00:00Z');
  private _updatedAt: Date = new Date('0001-01-01T00:00:00Z');
}

export type ISSPP1OrgProfileS3Info = Partial<
  Pick<ISSPP1OrgProfileS3Details, 'id' | 'isspId'>
>;
