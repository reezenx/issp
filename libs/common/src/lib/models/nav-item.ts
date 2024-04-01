import { Role } from '@prisma/client';

export interface NavItem {
  name?: string;
  disabled?: boolean;
  external?: boolean;
  twoLines?: boolean;
  chip?: boolean;
  icon?: string;
  navCap?: string;
  chipContent?: string;
  chipClass?: string;
  subtext?: string;
  route?: string;
  children?: NavItem[];
  ddType?: string;
  roles?: Role[];
}

export type ViewItem = Pick<NavItem, 'name' | 'icon' | 'route' | 'roles'>;
