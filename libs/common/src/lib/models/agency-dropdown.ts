import { Agency } from '@prisma/client';
import { Assign } from './assign';

export class AgencyDropdown
  extends Assign
  implements Pick<Agency, 'id' | 'name' | 'code'>
{
  id!: string;
  name!: string;
  code!: string;
}
