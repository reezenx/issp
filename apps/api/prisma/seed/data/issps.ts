import { ISSPAction, ISSPScope, ISSPSubScope } from '@prisma/client';

export const ISSP_ = {
  DICT: {
    id: 'cluapq16y000h08ju1v0x92rr',
    title: 'DICT Information System Strategic Plan 2018-2020 ',
    startYear: 2018,
    endYear: 2020,
    scope: ISSPScope.AGENCY_WIDE,
    subScope: ISSPSubScope.WITH_REGIONAL_FIELD_OFFICES,
  },
  DILG: {
    id: 'cluapq16y000i08juhr1zbbq8',
    title: 'DILG Information System Strategic Plan 2018-2020 ',
    startYear: 2020,
    endYear: 2023,
    scope: ISSPScope.DEPARTMENT_CENTRAL_HEAD_OFFICE,
    subScope: ISSPSubScope.CENTRAL_OFFICE_ONLY,
  },
  DAR: {
    id: 'cluapq16y000j08jufc8a7ai6',
    title: 'DAR Information System Strategic Plan 2018-2020 ',
    startYear: 2017,
    endYear: 2019,
    scope: ISSPScope.DEPARTMENT_CENTRAL_HEAD_OFFICE,
    subScope: ISSPSubScope.WITH_BUREAUS,
  },
  DA: {
    id: 'cluapq16y000k08juh7qrcm8t',
    title: 'DA Information System Strategic Plan 2018-2020 ',
    startYear: 2019,
    endYear: 2021,
    scope: ISSPScope.DEPARTMENT_CENTRAL_HEAD_OFFICE,
    subScope: ISSPSubScope.CENTRAL_OFFICE_ONLY,
  },
  DBM: {
    id: 'cluapq16y000l08juaco067tj',
    title: 'DBM Information System Strategic Plan 2018-2020 ',
    startYear: 2005,
    endYear: 2007,
    scope: ISSPScope.AGENCY_WIDE,
    subScope: ISSPSubScope.CENTRAL_OFFICE_ONLY,
  },
  DE: {
    id: 'cluapq16y000m08jugibq8gse',
    title: 'DE Information System Strategic Plan 2018-2020 ',
    startYear: 2019,
    endYear: 2021,
    scope: ISSPScope.DEPARTMENT_WIDE,
    subScope: null,
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
