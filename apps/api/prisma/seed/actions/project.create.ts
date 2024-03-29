import { PrismaClient } from '@prisma/client';
import {
  BUDGET_SOURCE,
  BUDGET_TYPE,
  IMPLEMENTATION_TYPE,
  PROJECT_CATEGORY,
  PROJECT_TYPE,
} from '../data/project.data';
import { upsertItems, ItemObj, ModelDelegate } from './helper.create';

export async function createProjectDetails(prisma: PrismaClient) {
  const itemObjs: { data: ItemObj; model: ModelDelegate }[] = [
    {
      data: PROJECT_TYPE,
      model: 'projectType',
    },
    {
      data: PROJECT_CATEGORY,
      model: 'projectCategory',
    },
    {
      data: IMPLEMENTATION_TYPE,
      model: 'implementationType',
    },
    {
      data: BUDGET_SOURCE,
      model: 'budgetSource',
    },
    {
      data: BUDGET_TYPE,
      model: 'budgetType',
    },
  ];

  itemObjs.forEach(({ model, data }) => {
    upsertItems(prisma, model, data);
  });
}
