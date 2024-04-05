import { AGENCY, ISSP_ } from './data';
import {
  PROJECT_TYPE,
  PROJECT_CATEGORY,
  BUDGET_TYPE,
  BUDGET_SOURCE,
  IMPLEMENTATION_TYPE,
} from './project-details.data';

export const PROJECT = {
  DICT_PROJECT1: {
    id: 'qisn8v1x812wg2mor9z6hx8i',
    title: 'DICT Laptops',
    cost: 1000000.0,
    quantity: 1000,
    unit: 'pcs',
    projectType: PROJECT_TYPE['IOS'],
    projectCategory: PROJECT_CATEGORY['TR1'],
    budgetType: BUDGET_TYPE['MOOE'],
    budgetSource: BUDGET_SOURCE['CB'],
    implType: IMPLEMENTATION_TYPE['OUT'],
    agency: AGENCY['DICT_EGOV'],
    issp: ISSP_['DICT'],
  },
};
