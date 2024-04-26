import { ISSPAction, Role } from '@prisma/client';
import { ItemObj } from '../actions/helper.create';

export const CATEGORY: ItemObj = {
  EDS: {
    id: 'cluapmrpz000508ju2k4x78g7',
    code: 'EDS',
    name: 'Economic Development Sector',
  },
  HDS: {
    id: 'cluapmrpz000608ju3ut90j6t',
    code: 'HDS',
    name: 'Human Development Sector',
  },
  GGS: {
    id: 'cluapmrpz000708judv9t344z',
    code: 'GGS',
    name: 'Good Governance Sector',
  },
  SPJ: {
    id: 'cluapmrpz000808ju1o40asg2',
    code: 'SPJ',
    name: 'Security, Peace and Justice Sector',
  },
  FEC: {
    id: 'cluapmrpz000908juao9a7bub',
    code: 'FEC',
    name: 'Food Security, Ecological Protection and Climate Change',
  },
  EDC: {
    id: 'cluapmrpz000a08ju6cq46vav',
    code: 'EDC',
    name: 'Education',
  },
};

export const DEPARTMENT = {
  DICT: {
    id: 'cluapmrpz000b08jug9qn9rci',
    code: 'DICT',
    uacs: '01',
    name: 'Department of Information and Communications Technology',
  },
  DILG: {
    id: 'cluapmrpz000c08ju6cn3bu71',
    code: 'DILG',
    uacs: '02',
    name: 'Department of the Interior and Local Government',
  },
  DAR: {
    id: 'cluapmrpz000d08ju9z8cbef1',
    code: 'DAR',
    uacs: '03',
    name: 'Department of Agrarian Reform',
  },
  DA: {
    id: 'cluapmrpz000e08ju78jt3brn',
    code: 'DA',
    uacs: '04',
    name: 'Department of Agriculture',
  },
  DBM: {
    id: 'cluapq16y000f08ju4pxmeii9',
    code: 'DBM',
    uacs: '05',
    name: 'Department of Budget and Management',
  },
  DE: {
    id: 'cluapq16y000g08jud2ln9y47',
    code: 'DE',
    uacs: '06',
    name: 'Department of Education',
  },
};

export const AGENCY = {
  DICT_EGOV: {
    id: 'cluapmrpz000b08jug9qn9rci',
    email: 'dictegov@local.com',
    code: 'DICT_EGOV',
    uacs: '005',
    name: 'eGovernment',
  },
  DILG_BFP: {
    id: 'cluapmrpz000c08ju6cn3bu71',
    email: 'dilg@local.com',
    code: 'DILG_BFP',
    uacs: '002',
    name: 'Bureau of Fire Protection',
  },
  DAR_OS: {
    id: 'cluapmrpz000d08ju9z8cbef1',
    email: 'dar.sec@local.com',
    code: 'DAR_OS',
    uacs: '001',
    name: 'Office of the Secretary',
  },
  DA_AGCPC: {
    id: 'cluapmrpz000e08ju78jt3brn',
    email: 'da@local.com',
    code: 'DA_AGCPC',
    uacs: '002',
    name: 'Agricultural Credit Policy Council ',
  },
  DBM_PS: {
    id: 'cluapq16y000f08ju4pxmeii9',
    email: 'dbm@local.com',
    code: 'DBM_PS',
    uacs: '003',
    name: 'Procurement Service',
  },
  DE_NBDB: {
    id: 'cluapq16y000g08jud2ln9y47',
    email: 'de@local.com',
    code: 'DE_NBDB',
    uacs: '003',
    name: 'National Book Development Board ',
  },
};

export const ROLE = {
  SUPER_ADMIN: {
    id: 'cluapr6o2000t08juduuaabk4',
    name: Role.SUPER_ADMIN,
  },
  ADMIN: {
    id: 'wx2ewanr3jntnxoavw4m1upn',
    name: Role.ADMIN,
  },
  VIEWER: {
    id: 'cluattuhr000x08l69wbee56a',
    name: Role.VIEWER,
  },
  PLANNER: {
    id: 'cluattuhr000u08l61ywy3bb5',
    name: Role.PLANNER,
  },
  ASSIGNER: {
    id: 'cluapr6o2000u08jubf798fhv',
    name: Role.ASSIGNER,
  },
  EVALUATOR: {
    id: 'cluapr6o2000w08jug50yax22',
    name: Role.EVALUATOR,
  },
  VALIDATOR: {
    id: 'cluapr6o2000x08ju8jxp6s3c',
    name: Role.VALIDATOR,
  },
  APPROVER: {
    id: 'cluapr6o2000y08ju9dj75oxu',
    name: Role.APPROVER,
  },
  ENDORSER: {
    id: 'cluaps3f9000z08ju6uuresti',
    name: Role.ENDORSER,
  },
};

export const USER = {
  SUPER_ADMIN: {
    id: 'cluaps3f9000z08ju6uuresti',
    email: 'super.admin@local.com',
  },
  ADMIN: {
    id: 'cluaps3f9001008ju00qn52nv',
    email: 'admin@local.com',
  },
  VIEWER: {
    id: 'cluattuhr000w08l6fjsdg7xq',
    email: 'viewer@local.com',
  },
  PLANNER: {
    id: 'cluattuhr000v08l6cr8n97vp',
    email: 'planner@local.com',
  },
  ASSIGNER: {
    id: 'cluaps3f9001308ju3a409mq4',
    email: 'assigner@local.com',
  },
  EVALUATOR: {
    id: 'cluaps3f9001508ju8clt3by1',
    email: 'evaluator@local.com',
  },
  VALIDATOR: {
    id: 'cluaps3f9001608juapjd62ft',
    email: 'validator@local.com',
  },
  APPROVER: {
    id: 'cluaps3f9001708jufso65lzb',
    email: 'approver@local.com',
  },
  ENDORSER: {
    id: 'cluaps3f9001808jucp8qhci6',
    email: 'endorser@local.com',
  },
};
