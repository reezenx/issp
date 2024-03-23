import { ISSP, ISSP_Status, PrismaClient } from '@prisma/client';
import { AGENCIES, ISSPS, USERS } from './constant';
import { DateTime } from 'luxon';
import { faker } from '@faker-js/faker';

export async function createISSPs(prisma: PrismaClient) {
  const baseAgencies: ISSP[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(ISSPS).forEach(([key, { id, title, startYear, endYear }]) => {
    baseAgencies.push({
      id,
      title,
      startYear,
      endYear,
      description: faker.commerce.productDescription(),
      status: ISSP_Status.NOT_STARTED,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
      tags: ['new', 'dict'],
      agencyId: AGENCIES.DICT.id,
      authorId: USERS.PLANNER.id,
      version: 1,
    });
  });

  await prisma.iSSP.createMany({
    data: baseAgencies,
  });
}
