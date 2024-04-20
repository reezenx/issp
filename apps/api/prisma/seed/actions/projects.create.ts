import { PrismaClient } from '@prisma/client';
import { PROJECT, generateRandomProjects } from '../data/projects.data';
import { faker } from '@faker-js/faker';
import { findDuplicates } from './helper.create';
import fs from 'fs';

export async function createProjects(prisma: PrismaClient) {
  await generateRandomProjects(3000);
  findDuplicates(PROJECT);
  // fs.writeFileSync('projects.json', JSON.stringify(PROJECT, null, 2), 'utf-8');
  await prisma.project.deleteMany();
  createProjectItems(prisma);
  connectProjectToTypes(prisma);
}

export async function createProjectItems(prisma: PrismaClient) {
  Object.entries(PROJECT).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, title, cost, quantity, unit },
    ]) => {
      const description = faker.commerce.productDescription();
      const tags = ['new'];
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
        issp,
      },
    ]) => {
      console.log(id, issp.id);
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
          // issp: {
          //   connect: {
          //     id: issp.id,
          //   },
          // },
        },
      });
    }
  );
}
