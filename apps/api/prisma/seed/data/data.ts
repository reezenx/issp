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

export const AGENCY = {
  DICT: {
    id: 'cluapmrpz000b08jug9qn9rci',
    email: 'dict@local.com',
    code: 'DICT',
    name: 'Department of Information and Communications Technology',
  },
  DILG: {
    id: 'cluapmrpz000c08ju6cn3bu71',
    email: 'dilg@local.com',
    code: 'DILG',
    name: 'Department of the Interior and Local Government',
  },
  DAR: {
    id: 'cluapmrpz000d08ju9z8cbef1',
    email: 'dar@local.com',
    code: 'DAR',
    name: 'Department of Agrarian Reform',
  },
  DA: {
    id: 'cluapmrpz000e08ju78jt3brn',
    email: 'da@local.com',
    code: 'DA',
    name: 'Department of Agriculture',
  },
  DBM: {
    id: 'cluapq16y000f08ju4pxmeii9',
    email: 'dbm@local.com',
    code: 'DBM',
    name: 'Department of Budget and Management',
  },
  DE: {
    id: 'cluapq16y000g08jud2ln9y47',
    email: 'de@local.com',
    code: 'DE',
    name: 'Department of Education',
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

export const PERMISSION = {
  MANAGE_ALL: {
    id: 'cluatov0p000108l2fvkm5u7i',
    action: 'manage',
    subject: 'all',
  },
  MANAGE_USER: {
    id: 'cluatov0p000208l22biw52gk',
    action: 'manage',
    subject: 'user',
  },
  CREATE_USER: {
    id: 'cluatov0p000308l24bgb2csg',
    action: 'create',
    subject: 'user',
  },
  READ_USER: {
    id: 'wer7h122rtujlu38yt509k9k',
    action: 'read',
    subject: 'user',
  },
  UPDATE_USER: {
    id: 'cluatov0q000408l2a45cemce',
    action: 'update',
    subject: 'user',
  },
  DELETE_USER: {
    id: 'cluatov0q000508l2ekxz6pxr',
    action: 'delete',
    subject: 'user',
  },
  MANAGE_ISSP: {
    id: 'cluatov0q000608l23pfxbtpx',
    action: 'manage',
    subject: 'issp',
  },
  CREATE_ISSP: {
    id: 'cluatov0q000708l2bmvca6od',
    action: 'create',
    subject: 'issp',
  },
  READ_ISSP: {
    id: 'qr8eqcaw3n270mhins6fmct3',
    action: 'read',
    subject: 'issp',
  },
  UPDATE_ISSP: {
    id: 'cluatov0q000808l21af6cb4q',
    action: 'update',
    subject: 'issp',
  },
  DELETE_ISSP: {
    id: 'clubgyhum000008l6e1w9gwt2',
    action: 'delete',
    subject: 'issp',
  },
  MANAGE_PROJECT: {
    id: 'cluatov0q000908l260xg8y9e',
    action: 'manage',
    subject: 'project',
  },
  CREATE_PROJECT: {
    id: 'cluatqs4r000h08l6e4906s7q',
    action: 'create',
    subject: 'project',
  },
  READ_PROJECT: {
    id: 'inlv9iqgwejd85maq7991c60',
    action: 'read',
    subject: 'project',
  },
  UPDATE_PROJECT: {
    id: 'cluatqs4r000i08l6hjf5cwpf',
    action: 'update',
    subject: 'project',
  },
  DELETE_PROJECT: {
    id: 'cluatqs4r000j08l68upfbuvz',
    action: 'delete',
    subject: 'project',
  },
  MANAGE_CATEGORIES: {
    id: 'dtudgdduwqmxse4xfb5krdzx',
    action: 'manage',
    subject: 'category',
  },
  CREATE_CATEGORIES: {
    id: 'zba387omkrf7rj9ra1wh2sts',
    action: 'create',
    subject: 'category',
  },
  READ_CATEGORIES: {
    id: 'bm16btw7rfqik9k3tyf3l0bn',
    action: 'read',
    subject: 'category',
  },
  UPDATE_CATEGORIES: {
    id: 'afcgr9xqp3j2gpjbvnv4si4v',
    action: 'update',
    subject: 'category',
  },
  DELETE_CATEGORIES: {
    id: 'pas6hjte9y4dfg87dxcbj3rv',
    action: 'delete',
    subject: 'category',
  },
  MANAGE_AGENCIES: {
    id: 'g41nugmns81317uclicz1v4m',
    action: 'manage',
    subject: 'agency',
  },
  CREATE_AGENCIES: {
    id: 'idilo92uwmu0ny0gwxk4inhk',
    action: 'create',
    subject: 'agency',
  },
  READ_AGENCIES: {
    id: 'idilo92uwmu0ny0gwxk4inhk',
    action: 'read',
    subject: 'agency',
  },
  UPDATE_AGENCIES: {
    id: 'uvg8wwulkcie6nur57i8nl4f',
    action: 'update',
    subject: 'agency',
  },
  DELETE_AGENCIES: {
    id: 'onvbc2jmlk1jur5v3rg52jit',
    action: 'delete',
    subject: 'agency',
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

export const ISSP_ = {
  DICT: {
    id: 'cluapq16y000h08ju1v0x92rr',
    title: 'DICT Information System Strategic Plan 2018-2020 ',
    startYear: 2018,
    endYear: 2020,
  },
  DILG: {
    id: 'cluapq16y000i08juhr1zbbq8',
    title: 'DILG Information System Strategic Plan 2018-2020 ',
    startYear: 2020,
    endYear: 2023,
  },
  DAR: {
    id: 'cluapq16y000j08jufc8a7ai6',
    title: 'DAR Information System Strategic Plan 2018-2020 ',
    startYear: 2017,
    endYear: 2019,
  },
  DA: {
    id: 'cluapq16y000k08juh7qrcm8t',
    title: 'DA Information System Strategic Plan 2018-2020 ',
    startYear: 2019,
    endYear: 2021,
  },
  DBM: {
    id: 'cluapq16y000l08juaco067tj',
    title: 'DBM Information System Strategic Plan 2018-2020 ',
    startYear: 2005,
    endYear: 2007,
  },
  DE: {
    id: 'cluapq16y000m08jugibq8gse',
    title: 'DE Information System Strategic Plan 2018-2020 ',
    startYear: 2019,
    endYear: 2021,
  },
};

export const ACTION_HISTORY = {
  DICT_ISSP_1: {
    id: 'club7ce3v000108lf4137a86p',
    action: ISSPAction.CREATE,
    parentModule: 'PART I. ORGANIZATIONAL PROFILE',
    childModule: 'A. DEPARTMENT/AGENCY VISION / MISSION STATEMENT',
    changes: ['Updated agency vision and mission statement'],
    isspVersion: 1,
  },
  DICT_ISSP_2: {
    id: 'club7ce3v000208lfgzapb1zy',
    action: ISSPAction.INSERT,
    parentModule: 'PART I. ORGANIZATIONAL PROFILE',
    childModule: 'B. DEPARTMENT/AGENCY PROFILE',
    changes: ['Inserted agency vision and mission statement'],
    isspVersion: 2,
  },
  DICT_ISSP_3: {
    id: 'club7ce3w000408lfb76iayx6',
    action: ISSPAction.ENDORSED,
    parentModule: 'PART III. DETAILED DESCRIPTION OF ICT PROJECTS',
    childModule: 'A. INTERNAL ICT PROJECTS',
    changes: ['Endorsed internal ICT projects'],
    isspVersion: 3,
  },
  DICT_ISSP_4: {
    id: 'club7ce3w000908lf5iuoesl3',
    action: ISSPAction.AMEND,
    parentModule: 'PART V. DEVELOPMENT AND INVESTMENT PROGRAM',
    childModule: 'A. ICT PROJECTS IMPLEMENTATION SCHEDULE',
    changes: ['Amend project schedule'],
    isspVersion: 4,
  },
  DICT_ISSP_5: {
    id: 'cluapq16y000l08juaco067tj',
    action: ISSPAction.APPROVE,
    parentModule: 'PART IV. RESOURCE REQUIREMENTS',
    childModule: 'A. DEPLOYMENT OF ICT EQUIPMENT AND SERVICES',
    changes: ['Assigned ICT equipments and services'],
    isspVersion: 5,
  },
};
