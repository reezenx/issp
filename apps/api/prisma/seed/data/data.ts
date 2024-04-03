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

export const PERMISSION = {
  MANAGE_ALL: {
    id: 'cluatov0p000108l2fvkm5u7i',
    action: 'manage',
    subject: 'all',
  },
  MANAGE_USER: {
    id: 'cluatov0p000208l22biw52gk',
    action: 'manage',
    subject: 'User',
  },
  CREATE_USER: {
    id: 'cluatov0p000308l24bgb2csg',
    action: 'create',
    subject: 'User',
  },
  READ_USER: {
    id: 'wer7h122rtujlu38yt509k9k',
    action: 'read',
    subject: 'User',
  },
  UPDATE_USER: {
    id: 'cluatov0q000408l2a45cemce',
    action: 'update',
    subject: 'User',
  },
  DELETE_USER: {
    id: 'cluatov0q000508l2ekxz6pxr',
    action: 'delete',
    subject: 'User',
  },
  MANAGE_ISSP: {
    id: 'cluatov0q000608l23pfxbtpx',
    action: 'manage',
    subject: 'ISSP',
  },
  CREATE_ISSP: {
    id: 'cluatov0q000708l2bmvca6od',
    action: 'create',
    subject: 'ISSP',
  },
  READ_ISSP: {
    id: 'qr8eqcaw3n270mhins6fmct3',
    action: 'read',
    subject: 'ISSP',
  },
  UPDATE_ISSP: {
    id: 'cluatov0q000808l21af6cb4q',
    action: 'update',
    subject: 'ISSP',
  },
  DELETE_ISSP: {
    id: 'clubgyhum000008l6e1w9gwt2',
    action: 'delete',
    subject: 'ISSP',
  },
  MANAGE_PROJECT: {
    id: 'cluatov0q000908l260xg8y9e',
    action: 'manage',
    subject: 'Project',
  },
  CREATE_PROJECT: {
    id: 'cluatqs4r000h08l6e4906s7q',
    action: 'create',
    subject: 'Project',
  },
  READ_PROJECT: {
    id: 'inlv9iqgwejd85maq7991c60',
    action: 'read',
    subject: 'Project',
  },
  UPDATE_PROJECT: {
    id: 'cluatqs4r000i08l6hjf5cwpf',
    action: 'update',
    subject: 'Project',
  },
  DELETE_PROJECT: {
    id: 'cluatqs4r000j08l68upfbuvz',
    action: 'delete',
    subject: 'Project',
  },
  MANAGE_CATEGORY: {
    id: 'dtudgdduwqmxse4xfb5krdzx',
    action: 'manage',
    subject: 'Category',
  },
  CREATE_CATEGORY: {
    id: 'zba387omkrf7rj9ra1wh2sts',
    action: 'create',
    subject: 'Category',
  },
  READ_CATEGORY: {
    id: 'bm16btw7rfqik9k3tyf3l0bn',
    action: 'read',
    subject: 'Category',
  },
  UPDATE_CATEGORY: {
    id: 'afcgr9xqp3j2gpjbvnv4si4v',
    action: 'update',
    subject: 'Category',
  },
  DELETE_CATEGORY: {
    id: 'pas6hjte9y4dfg87dxcbj3rv',
    action: 'delete',
    subject: 'Category',
  },
  MANAGE_AGENCY: {
    id: 'g41nugmns81317uclicz1v4m',
    action: 'manage',
    subject: 'Agency',
  },
  CREATE_AGENCY: {
    id: 'idilo92uwmu0ny0gwxk4inhk',
    action: 'create',
    subject: 'Agency',
  },
  READ_AGENCY: {
    id: 'ujs9nkezfak9cpub770cbqke',
    action: 'read',
    subject: 'Agency',
  },
  UPDATE_AGENCY: {
    id: 'uvg8wwulkcie6nur57i8nl4f',
    action: 'update',
    subject: 'Agency',
  },
  DELETE_AGENCY: {
    id: 'onvbc2jmlk1jur5v3rg52jit',
    action: 'delete',
    subject: 'Agency',
  },
  MANAGE_DEPARTMENT: {
    id: 'uz5hvax0n32zz9cg40jidwub',
    action: 'manage',
    subject: 'Department',
  },
  CREATE_DEPARTMENT: {
    id: 'l2jt6easf2brrts35shrzvgk',
    action: 'create',
    subject: 'Department',
  },
  READ_DEPARTMENT: {
    id: 'ux2tvg1csor6560pxyv98qtx',
    action: 'read',
    subject: 'Department',
  },
  UPDATE_DEPARTMENT: {
    id: 'lt8hae3ehppzo0t5jb17wifa',
    action: 'update',
    subject: 'Department',
  },
  DELETE_DEPARTMENT: {
    id: 's39kbdrrkd810009lb2qh9k3',
    action: 'delete',
    subject: 'Department',
  },
  MANAGE_PROJECT_TYPE: {
    id: 'vco43waupsbebvhz1upod7ej',
    action: 'manage',
    subject: 'ProjectType',
  },
  CREATE_PROJECT_TYPE: {
    id: 'p0paw3lqlb7xzmw9g39otzse',
    action: 'create',
    subject: 'ProjectType',
  },
  READ_PROJECT_TYPE: {
    id: 'ujs9nkezfak9cpub770cbqke',
    action: 'read',
    subject: 'ProjectType',
  },
  UPDATE_PROJECT_TYPE: {
    id: 'rs3wf77tnei68rk5cv8w5c8w',
    action: 'update',
    subject: 'ProjectType',
  },
  DELETE_PROJECT_TYPE: {
    id: 'fpg67ho4eo1t7doodyk74is4',
    action: 'delete',
    subject: 'ProjectType',
  },
  MANAGE_PROJECT_SUB_TYPE: {
    id: 'lf7x4hperobak4nhyngxl7wm',
    action: 'manage',
    subject: 'ProjectSubType',
  },
  CREATE_PROJECT_SUB_TYPE: {
    id: 'z6ibouujq4874vfgrkoak9vp',
    action: 'create',
    subject: 'ProjectSubType',
  },
  READ_PROJECT_SUB_TYPE: {
    id: 'zeekscdzed2nzf3w248h7dfo',
    action: 'read',
    subject: 'ProjectSubType',
  },
  UPDATE_PROJECT_SUB_TYPE: {
    id: 'minla78zsntte0hji2bgr50f',
    action: 'update',
    subject: 'ProjectSubType',
  },
  DELETE_PROJECT_SUB_TYPE: {
    id: 'uonfi8ozj5a842mxyfjhrzef',
    action: 'delete',
    subject: 'ProjectSubType',
  },
  MANAGE_PROJECT_IMPL_TYPE: {
    id: 'r1cffv1zyc4qi64niuoud8uk',
    action: 'manage',
    subject: 'ProjectImplementationType',
  },
  CREATE_PROJECT_IMPL_TYPE: {
    id: 'bdbu9qsxrhmw2ndtb9927ygi',
    action: 'create',
    subject: 'ProjectImplementationType',
  },
  READ_PROJECT_IMPL_TYPE: {
    id: 'o58p732fsnkiaal0xybfzagc',
    action: 'read',
    subject: 'ProjectImplementationType',
  },
  UPDATE_PROJECT_IMPL_TYPE: {
    id: 'usjh390qobe9ktacu3twzrk8',
    action: 'update',
    subject: 'ProjectImplementationType',
  },
  DELETE_PROJECT_IMPL_TYPE: {
    id: 'onvbc2jmlk1jur5v3rg52jit',
    action: 'delete',
    subject: 'ProjectImplementationType',
  },
  MANAGE_PROJECT_CATEGORY: {
    id: 'tcrlhhmy3im7k0161b3lbgff',
    action: 'manage',
    subject: 'ProjectCategory',
  },
  CREATE_PROJECT_CATEGORY: {
    id: 'gnwo7ap4ftho38rsof5sinvc',
    action: 'create',
    subject: 'ProjectCategory',
  },
  READ_PROJECT_CATEGORY: {
    id: 'yxc5k8wctcratj8yxbxmgitp',
    action: 'read',
    subject: 'ProjectCategory',
  },
  UPDATE_PROJECT_CATEGORY: {
    id: 'giz2wy500d8vnby5fuz2zmb4',
    action: 'update',
    subject: 'ProjectCategory',
  },
  DELETE_PROJECT_CATEGORY: {
    id: 'dci03f3cd7uwycfny0s11g2m',
    action: 'delete',
    subject: 'ProjectCategory',
  },
  MANAGE_BUDGET_TYPE: {
    id: 'am2m5riptp5ngy3mr5cqv79d',
    action: 'manage',
    subject: 'BudgetType',
  },
  CREATE_BUDGET_TYPE: {
    id: 'nlz9at2ztx7h0ialagckd6w9',
    action: 'create',
    subject: 'BudgetType',
  },
  READ_BUDGET_TYPE: {
    id: 'ujs9nkezfak9cpub770cbqke',
    action: 'read',
    subject: 'BudgetType',
  },
  UPDATE_BUDGET_TYPE: {
    id: 'e59dk3x0qn3vggle4cj8g4wf',
    action: 'update',
    subject: 'BudgetType',
  },
  DELETE_BUDGET_TYPE: {
    id: 'jw7ziqdhukeijmybat9rzr0p',
    action: 'delete',
    subject: 'BudgetType',
  },
  MANAGE_BUDGET_SOURCE: {
    id: 'wg27sv451wjwtyklrf4dfvz2',
    action: 'manage',
    subject: 'BudgetSource',
  },
  CREATE_BUDGET_SOURCE: {
    id: 'ciqryhdlfvqg2q0xhwad9zpj',
    action: 'create',
    subject: 'BudgetSource',
  },
  READ_BUDGET_SOURCE: {
    id: 'vxefrbj0bny2t9pq61v2hfxr',
    action: 'read',
    subject: 'BudgetSource',
  },
  UPDATE_BUDGET_SOURCE: {
    id: 'uvg8wwulkcie6nur57i8nl4f',
    action: 'update',
    subject: 'BudgetSource',
  },
  DELETE_BUDGET_SOURCE: {
    id: 'bgfjeedw12xumy2u94nb1udj',
    action: 'delete',
    subject: 'BudgetSource',
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
