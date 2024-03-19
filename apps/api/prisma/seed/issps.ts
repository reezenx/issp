import { ISSP, ISSP_Status, PrismaClient } from '@prisma/client';
import { AGENCIES, ISSPS } from './constant';
import { DateTime } from 'luxon';
import { faker } from '@faker-js/faker';

export async function createISSPs(prisma: PrismaClient) {
  const baseAgencies: ISSP[] = [];

  Object.entries(ISSPS).forEach(([key, { id, title, yearStart, yearEnd }]) => {
    baseAgencies.push({
      id,
      title,
      yearStart,
      yearEnd,
      description: faker.commerce.productDescription(),
      status: ISSP_Status.NOT_STARTED,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
      tags: ['new', 'dict'],
      agencyId: AGENCIES.DICT.id,
    });
  });

  await prisma.iSSP.createMany({
    data: baseAgencies,
  });

  // await prisma.iSSP.updateMany({
  //   where: {

  //   }
  // });
}
