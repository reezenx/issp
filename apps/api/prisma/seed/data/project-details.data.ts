import { Item, ItemObj } from '../actions/helper.create';

export const PROJECT_TYPE_GROUP: ItemObj = {
  TSE: {
    id: 'co781302d8ttuw33zfmbmp7l',
    code: 'TSE',
    name: 'Training and Scholarship Expenses',
  },
  SME: {
    id: 'ffwj6pdjm5sprdrbi8oxy68f',
    code: 'SME',
    name: 'Supplies and Materials Expenses',
  },
  COE: {
    id: 'teiub4hn5bdt6qu8ifbbqufe',
    code: 'COE',
    name: 'Communication Expenses',
  },
  SRE: {
    id: 'vzmqwkabdvgm53gvil2wwjdf',
    code: 'SRE',
    name: 'Survey, Research, Exploration and Development Expenses',
  },
  GTD: {
    id: 'eyz5yp9h2z96ghha38j0jnxz',
    code: 'GTD',
    name: 'Generation, Transmission and Distribution Expenses',
  },
  PRS: {
    id: 'vxuhk75t8wc5vd2p1degc5ud',
    code: 'PRS',
    name: 'Professional Services',
  },
  GES: {
    id: 'l6an0azo1f0bekgl3wrjjt5b',
    code: 'GES',
    name: 'General Services',
  },
  TEE: {
    id: 'wte8w6vg1zx9yjlfn9a9bwt8',
    code: 'TEE',
    name: 'Telephone Expenses',
  },
  RMI: {
    id: 'ozs5zi31oe9do94i41gv7vkk',
    code: 'RMI',
    name: 'Repairs and Maintenance - Infrastructure Assets',
  },
  RMM: {
    id: 'zvpljl0zljriwshxk4nmd324',
    code: 'ISE',
    name: 'Repairs and Maintenance - Machinery and Equipment',
  },
  RML: {
    id: 'x2ub6nmkaaqmjho1azqvjcud',
    code: 'RML',
    name: 'Repairs and Maintenance - Leased Assets',
  },
  RLE: {
    id: 'u4lte5bay1eb14gjyddczcy2',
    code: 'RLE',
    name: 'Rent/Lease Expenses',
  },
  SUE: {
    id: 'ug53zfjga3xg8owfefao8424',
    code: 'SUE',
    name: 'Subscription Expenses',
  },
  INO: {
    id: 'o6tfrcssoffbdc3eadg0kpi2',
    code: 'INO',
    name: 'Infrastructure Outlay',
  },
  MEO: {
    id: 'tze1gpdzwow6qnb89qvt76ry',
    code: 'MEO',
    name: 'Machinery and Equipment Outlay',
  },
};

export const PROJECT_TYPE: { [key: string]: Item & { group: Item } } = {
  ITE: {
    id: 'yrirggqoutimuhbuo2r4d19l',
    name: 'ICT Training Expenses ',
    code: '50202010-01',
    group: PROJECT_TYPE_GROUP['TSE'],
  },
  IOS: {
    id: 'i1gu3788lm94xu9oenv457na',
    name: 'ICT Office Supplies',
    code: '50203010-01',
    group: PROJECT_TYPE_GROUP['SME'],
  },
  TEE: {
    id: 'bdpozr0w8up3b8id5s8lpnnu',
    name: 'Telephone Expenses',
    code: '50205020-00',
    group: PROJECT_TYPE_GROUP['COE'],
  },
  TEM: {
    id: 'es5c3jcy4j1co1urv9z00uz9',
    name: 'Telephone Expenses - Mobile',
    code: '50205020-01',
    group: PROJECT_TYPE_GROUP['COE'],
  },
  TEL: {
    id: 'ewg3usm9cgmo17q2dq9egvtx',
    name: 'Telephone Expenses - Landline',
    code: '50205020-02',
    group: PROJECT_TYPE_GROUP['COE'],
  },
  ISE: {
    id: 'wauzcdbezgpfjf8g2dtfyp0y',
    name: 'Internet Subscription Expenses',
    code: '50205030-00',
    group: PROJECT_TYPE_GROUP['COE'],
  },
  CST: {
    id: 'cfoyvn9vwm6ggd1pio8h7s0w',
    name: 'Cable, Satellite, Telegraph and Radio Expenses',
    code: '50205040-00',
    group: PROJECT_TYPE_GROUP['COE'],
  },
  IED: {
    id: 'yzogzh8y85f8mto8r1y0bvih',
    name: 'ICT Research, Exploration and Development Expenses ',
    code: '50207020-01',
    group: PROJECT_TYPE_GROUP['SRE'],
  },
  IGT: {
    id: 'jpzvod7buwevu2j3mdgnttvv',
    name: 'ICT Generation, Transmission and Distribution Expenses',
    code: '50209010-01',
    group: PROJECT_TYPE_GROUP['GTD'],
  },
  ICS: {
    id: 'ji4nasp1tdxizg0d39m3xhvc',
    name: 'ICT Consultancy Services',
    code: '50211030-01',
    group: PROJECT_TYPE_GROUP['PRS'],
  },
  GIS: {
    id: 'z0h3i2osryhcnw811hcu9tw5',
    name: 'General ICT Services',
    code: '50212000-01',
    group: PROJECT_TYPE_GROUP['GES'],
  },
  CON: {
    id: 'e0utiy6fgsmg6c21kn7go6ja',
    name: 'Communication Networks',
    code: '50213030-06',
    group: PROJECT_TYPE_GROUP['RMI'],
  },
  IMR: {
    id: 'c35vcx7y3mlh78t2f8t3gsev',
    name: 'ICT Machinery and Equipment - Repairs and Maintenance',
    code: '50213050-03',
    group: PROJECT_TYPE_GROUP['RMM'],
  },
  CER: {
    id: 'd7dtlwg5umod05rdmaim5ppa',
    name: 'Communication Equipment - Repairs and Maintenance',
    code: '50213050-07',
    group: PROJECT_TYPE_GROUP['RMM'],
  },
  PER: {
    id: 'lrcs0vklianxg3h7yf3e9uz2',
    name: 'Printing Equipment - Repairs and Maintenance',
    code: '50213050-12',
    group: PROJECT_TYPE_GROUP['RMM'],
  },
  IML: {
    id: 'km4h63vdmqai3izlidhkdlno',
    name: 'ICT Machinery and Equipment - Repairs and Maintenance - Leased Assets',
    code: '50213080-04',
    group: PROJECT_TYPE_GROUP['RML'],
  },
  CNL: {
    id: 'ar2o9oo00u5c03l7dyb8sosg',
    name: 'Communication Networks  - Repairs and Maintenance - Leased Assets',
    code: '50213080-05',
    group: PROJECT_TYPE_GROUP['RML'],
  },
  IME: {
    id: 'dtxfskn45ajuv7kceem3fzom',
    name: 'ICT Machinery and Equipment - Rents',
    code: '50299050-08',
    group: PROJECT_TYPE_GROUP['RLE'],
  },
  CNR: {
    id: 'lp40cfhk3tbq6w29mfl87yk6',
    name: 'Communication Networks  - Rents',
    code: '50299050-09',
    group: PROJECT_TYPE_GROUP['RLE'],
  },
  ISS: {
    id: 't3jzyilnzbs7lrbb932is0nj',
    name: 'ICT Software Subscription',
    code: '50299070-01',
    group: PROJECT_TYPE_GROUP['SUE'],
  },
  DCS: {
    id: 'alenjcjacb8ilc4wouzjuji6',
    name: 'Data Center Services',
    code: '50299070-02',
    group: PROJECT_TYPE_GROUP['SUE'],
  },
  CCS: {
    id: 'kjk0fs2khrd7knrzxi3h37tb',
    name: 'Cloud Computing Services',
    code: '50299070-03',
    group: PROJECT_TYPE_GROUP['SUE'],
  },
  WEM: {
    id: 'iv89q1hgmuovfarikgj3cusq',
    name: 'Website Maintenance',
    code: '50299990-01',
    group: PROJECT_TYPE_GROUP['SUE'],
  },
  CNI: {
    id: 'b6jxi3trpc3jx9t12czsyvu5',
    name: 'Communication Networks - Infrastructure Outlay',
    code: '50604030-06',
    group: PROJECT_TYPE_GROUP['INO'],
  },
  IMM: {
    id: 'm1lgsfb2romz7mm8mkn91z6t',
    name: 'ICT Machinery and Equipment - Machinery and Equipment Outlay',
    code: '50604050-03',
    group: PROJECT_TYPE_GROUP['MEO'],
  },
  CEM: {
    id: 'p12a5ip683uu1b1ncjkrskzp',
    name: 'Communication Equipment - Machinery and Equipment Outlay',
    code: '50604050-07',
    group: PROJECT_TYPE_GROUP['MEO'],
  },
  PEM: {
    id: 'pptzmhstp3nom0ccy7gqew4j',
    name: 'Printing Equipment - Machinery and Equipment Outlay',
    code: '50604050-12',
    group: PROJECT_TYPE_GROUP['MEO'],
  },
  ISM: {
    id: 'gq0lr8h41rqih54ehpyg8lra',
    name: 'ICT Software - Machinery and Equipment Outlay',
    code: '50604050-15',
    group: PROJECT_TYPE_GROUP['MEO'],
  },
};

export const PROJECT_CATEGORY: ItemObj = {
  TR1: {
    id: 'clubxk9c3000308jp9a9h3eje',
    code: 'TR1',
    name: 'Tier 1',
  },
  TR2: {
    id: 'clubxk9c4000508jpcj8jd3r3',
    code: 'TR2',
    name: 'Tier 2',
  },
};

export const BUDGET_TYPE: ItemObj = {
  CO: {
    id: 'cluc0eesg000r08jq2s42ha6m',
    code: 'CO',
    name: 'Capital Outlay',
  },
  MOOE: {
    id: 'cluc0eesg000p08jqcr351j3o',
    code: 'MOOE',
    name: 'Maintenance and Other Operating Expenses',
  },
};

export const BUDGET_SOURCE: ItemObj = {
  CB: {
    id: 'cluc0eesg000n08jq77by9ekg',
    code: 'CB',
    name: 'Continuing Budget',
  },
  BY: {
    id: 'cluc0eesg000o08jqbn2t69mv',
    code: 'BY',
    name: 'Budget Year',
  },
};

export const IMPLEMENTATION_TYPE: ItemObj = {
  OUT: {
    id: 'clubxk9c3000008jp2mpj9zs9',
    code: 'OUT',
    name: 'Outsourced',
  },
  IHD: {
    id: 'clubxk9c3000108jpadj1hbps',
    code: 'IHD',
    name: 'In-house Development',
  },
  CRA: {
    id: 'clubxk9c3000208jpcruz4d4l',
    code: 'CRA',
    name: 'Cross-Agency',
  },
};
