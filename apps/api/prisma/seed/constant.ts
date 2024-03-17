import { createId } from '@paralleldrive/cuid2';
import { Role, User, Agency, Category } from '@prisma/client';

export const DEFAULT = {
  PW: 'ChangeM3!',
  _PW: '8%GVnnFit6viNS5O',
};

export const CATEGORIES: {
  [key: string]: Pick<Category, 'id' | 'name' | 'code'>;
} = {
  EDS: {
    id: createId(),
    code: 'EDS',
    name: 'Economic Development Sector',
  },
  HDS: {
    id: createId(),
    code: 'HDS',
    name: 'Human Development Sector',
  },
  GGS: {
    id: createId(),
    code: 'GGS',
    name: 'Good Governance Sector',
  },
  SPJ: {
    id: createId(),
    code: 'SPJ',
    name: 'Security, Peace and Justice Sector',
  },
  FEC: {
    id: createId(),
    code: 'FEC',
    name: 'Food Security, Ecological Protection and Climate Change',
  },
  EDC: {
    id: createId(),
    code: 'EDC',
    name: 'Education',
  },
};

export const AGENCIES: {
  [key: string]: Pick<Agency, 'id' | 'email' | 'name' | 'code'>;
} = {
  DICT: {
    id: createId(),
    email: 'dict@local',
    code: 'DICT',
    name: 'Department of Information and Communications Technology',
  },
  DILG: {
    id: createId(),
    email: 'dilg@local',
    code: 'DILG',
    name: 'Department of the Interior and Local Government',
  },
  DAR: {
    id: createId(),
    email: 'dar@local',
    code: 'DAR',
    name: 'Department of Agrarian Reform',
  },
  DA: {
    id: createId(),
    email: 'da@local',
    code: 'DA',
    name: 'Department of Agriculture',
  },
  DBM: {
    id: createId(),
    email: 'dbm@local',
    code: 'DBM',
    name: 'Department of Budget and Management',
  },
  DE: {
    id: createId(),
    email: 'de@local',
    code: 'DE',
    name: 'Department of Education',
  },
};

export const USERS: {
  [key in Role]: Pick<User, 'id' | 'email' | 'password' | 'role'>;
} = {
  SUPER_ADMIN: {
    id: createId(),
    email: 'super.admin@local',
    password: DEFAULT._PW,
    role: [Role.SUPER_ADMIN],
  },
  ADMIN: {
    id: createId(),
    email: 'admin@local',
    password: DEFAULT.PW,
    role: [Role.ADMIN],
  },
  VIEWER: {
    id: createId(),
    email: 'viewer@local',
    password: DEFAULT.PW,
    role: [Role.VIEWER],
  },
  EVALUATOR: {
    id: createId(),
    email: 'evaluator@local',
    password: DEFAULT.PW,
    role: [Role.EVALUATOR],
  },
  PLANNER: {
    id: createId(),
    email: 'planner@local',
    password: DEFAULT.PW,
    role: [Role.PLANNER],
  },
  ENDORSER: {
    id: createId(),
    email: 'endorser@local',
    password: DEFAULT.PW,
    role: [Role.ENDORSER],
  },
  APPROVER: {
    id: createId(),
    email: 'approver@local',
    password: DEFAULT.PW,
    role: [Role.APPROVER],
  },
};

export const ISSP = {};
