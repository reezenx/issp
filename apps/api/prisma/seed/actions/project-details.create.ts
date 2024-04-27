import { PrismaClient } from '@prisma/client';
import {
  BUDGET_SOURCE,
  BUDGET_TYPE,
  IMPLEMENTATION_TYPE,
  PROJECT_CATEGORY,
  PROJECT_TYPE,
  PROJECT_TYPE_GROUP,
} from '../data/project-details.data';
import {
  upsertItems,
  ItemObj,
  ModelDelegate,
  findDuplicates,
} from './helper.create';

export async function createProjectDetails(prisma: PrismaClient) {
  const itemObjs: { data: ItemObj; model: ModelDelegate }[] = [
    {
      data: PROJECT_TYPE_GROUP,
      model: 'projectTypeGroup',
    },
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

  itemObjs.forEach(async ({ model, data }) => {
    findDuplicates(data);
    await upsertItems(prisma, model, data);
  });

  connectProjectTypeToGroup(prisma);
}

export async function connectProjectTypeToGroup(prisma: PrismaClient) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const updates: any[] = [];
  Object.entries(PROJECT_TYPE).forEach(async ([key, { id, group }]) => {
    const update = prisma.projectType.update({
      where: { id },
      data: {
        projectTypeGroup: {
          connect: {
            id: group.id,
          },
        },
      },
    });
  });
  await prisma.$transaction(updates);
}
