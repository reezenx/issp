import { PrismaClient } from '@prisma/client';
import {
  BUDGET_SOURCE,
  BUDGET_TYPE,
  IMPLEMENTATION_TYPE,
  PROJECT,
  PROJECT_CATEGORY,
  PROJECT_TYPE,
  PROJECT_TYPE_GROUP,
} from '../data/project.data';
import { upsertItems, ItemObj, ModelDelegate } from './helper.create';
import { faker } from '@faker-js/faker';

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

  itemObjs.forEach(({ model, data }) => {
    upsertItems(prisma, model, data);
  });
}

export async function createProjects(prisma: PrismaClient) {
  Object.entries(PROJECT).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, title, cost, quantity, unit },
    ]) => {
      const description = faker.commerce.productDescription();
      const tags = ['new', 'dict'];
      const item = {
        id,
        title,
        description,
        tags,
        cost,
        quantity,
        unit,
        createdAt: new Date(),
        createdBy: 'System',
        readOnly: false,
      };

      await prisma.project.upsert({
        where: { id },
        update: {
          title,
          description,
          tags,
        },
        create: {
          ...item,
        },
      });
    }
  );
}
