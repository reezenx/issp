import { Category } from '@prisma/client';
import { Assign } from './assign';

export class CategoryDropdown
  extends Assign
  implements Pick<Category, 'id' | 'name' | 'code'>
{
  id!: string;
  name!: string;
  code!: string;
}
