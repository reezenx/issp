import { PrismaClient } from '@prisma/client';
import { PROJECT, generateRandomProjects } from '../data/projects.data';
import { faker } from '@faker-js/faker';
import { findDuplicates } from './helper.create';
import { ISSP_ } from '../data/issps';
// import fs from 'fs';

export async function createProjects(prisma: PrismaClient) {
  await generateRandomProjects(10);
  findDuplicates(PROJECT);
  // fs.writeFileSync('projects.json', JSON.stringify(PROJECT, null, 2), 'utf-8');
  await prisma.project.deleteMany();
  createProjectItems(prisma);
}

export async function createProjectItems(prisma: PrismaClient) {
  const data: any = [];
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
      data.push(item);
    }
  );
  // await prisma.project.createMany({
  //   data,
  // });
  const create = prisma.project.createMany({
    data,
  });

  const updates: any[] = [];
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
      const update = prisma.project.update({
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
          issp: {
            connect: {
              id: issp.id,
            },
          },
        },
      });
      updates.push(update);
    }
  );
  await prisma.$transaction([create, ...updates]);
  // await prisma.$transaction(updates);
}
