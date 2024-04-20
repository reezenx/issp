import { AGENCY, ISSP_ } from './data';
import { IDS } from './ids';
import {
  PROJECT_TYPE,
  PROJECT_CATEGORY,
  BUDGET_TYPE,
  BUDGET_SOURCE,
  IMPLEMENTATION_TYPE,
} from './project-details.data';
import { createId } from '@paralleldrive/cuid2';

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

export const AGENCIES = Object.keys(AGENCY);
export const BUDGET_TYPES = Object.keys(BUDGET_TYPE);
export const BUDGET_SOURCES = Object.keys(BUDGET_SOURCE);
export const IMPLEMENTATION_TYPES = Object.keys(IMPLEMENTATION_TYPE);
export const ISSPS = Object.keys(ISSP_);
export const PROJECT_TYPES = Object.keys(PROJECT_TYPE);
export const PROJECT_CATEGORIES = Object.keys(PROJECT_CATEGORY);
export const cost = {
  min: 1000000,
  max: 10000000,
};
export const quantityPcs = {
  min: 1000,
  max: 999999,
};
export const quantityLot = {
  min: 1,
  max: 10,
};
export const unit = {
  PCS: 'pcs',
  LOT: 'lot',
};

const getRandomElement = (array: string[]) =>
  array[Math.floor(Math.random() * array.length)];

const generateRandomProject = (i: number) => {
  // const projectId = IDS[i];
  const projectId = createId();
  const projectType = getRandomElement(PROJECT_TYPES);
  const projectCategory = getRandomElement(PROJECT_CATEGORIES);
  const budgetType = getRandomElement(BUDGET_TYPES);
  const budgetSource = getRandomElement(BUDGET_SOURCES);
  const implType = getRandomElement(IMPLEMENTATION_TYPES);
  const agency = getRandomElement(AGENCIES);
  const issp = getRandomElement(ISSPS);
  const projectUnit = Math.random() < 0.5 ? unit.PCS : unit.LOT; // Randomly selecting unit
  const projectQuantity =
    projectUnit === unit.PCS
      ? Math.floor(Math.random() * (quantityPcs.max - quantityPcs.min + 1)) +
        quantityPcs.min
      : Math.floor(Math.random() * (quantityLot.max - quantityLot.min + 1)) +
        quantityLot.min; // Generating quantity based on unit

  // Generating a random cost within the specified range
  const projectCost = (
    Math.random() * (cost.max - cost.min) +
    cost.min
  ).toFixed(2);

  return {
    id: projectId,
    title: AGENCY[agency].name + ' Project - ' + projectId,
    cost: parseFloat(projectCost),
    quantity: projectQuantity,
    unit: projectUnit,
    agency: AGENCY[agency],
    projectType: PROJECT_TYPE[projectType],
    projectCategory: PROJECT_CATEGORY[projectCategory],
    budgetType: BUDGET_TYPE[budgetType],
    budgetSource: BUDGET_SOURCE[budgetSource],
    implType: IMPLEMENTATION_TYPE[implType],
    issp: ISSP_[issp],
  };
};

export const generateRandomProjects = async (numProjects: number) => {
  for (let i = 0; i < numProjects; i++) {
    const proj = generateRandomProject(i);
    PROJECT[proj.title] = proj;
  }

  return PROJECT;
};
