import { ISSPP1OrgProfileS1 } from '@prisma/client';
import { Assign } from '../assign';
import { ISSPDetails } from './issp-details';

export class ISSPP1OrgProfileS1Details
  extends Assign
  implements ISSPP1OrgProfileS1
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
  a1MandateFunctions: string;
  a1MandateLegal: string;
  a2Vision: string;
  a3Mission: string;
  a4FinalOutputs: string;
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

export type ISSPP1OrgProfileS1Info = Partial<
  Pick<
    ISSPP1OrgProfileS1Details,
    | 'id'
    | 'isspId'
    | 'a1MandateFunctions'
    | 'a1MandateLegal'
    | 'a2Vision'
    | 'a3Mission'
    | 'a4FinalOutputs'
  >
>;
