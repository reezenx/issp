import { PrismaClient } from '@prisma/client';
import { PROJECT } from '../data/projects.data';
import { faker } from '@faker-js/faker';
import { findDuplicates } from './helper.create';

export async function createProjects(prisma: PrismaClient) {
  findDuplicates(PROJECT);

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

  connectProjectToTypes(prisma);
}

export async function connectProjectToTypes(prisma: PrismaClient) {
  Object.entries(PROJECT).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      {
        id,
        projectType,
        projectCategory,
        budgetType,
        budgetSource,
        implType,
        agency,
      },
    ]) => {
      await prisma.project.update({
        where: { id },
        data: {
          type: {
            connect: {
              id: projectType.id,
            },
          },
          category: {
            connect: {
              id: projectCategory.id,
            },
          },
          budgetType: {
            connect: {
              id: budgetType.id,
            },
          },
          budgetSource: {
            connect: {
              id: budgetSource.id,
            },
          },
          implementationType: {
            connect: {
              id: implType.id,
            },
          },
          agency: {
            connect: {
              id: agency.id,
            },
          },
        },
      });
    }
  );
}
