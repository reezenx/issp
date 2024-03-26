import { Agency, PrismaClient } from '@prisma/client';
import { AGENCIES, CATEGORIES } from './dev-data';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

export async function createAgencies(prisma: PrismaClient) {
  const baseItems: Agency[] = [];

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(AGENCIES).forEach(([key, { id, name, code, email }]) => {
    baseItems.push({
      id,
      name,
      code,
      email,
      phone: faker.helpers.fromRegExp('09[0-9]{9}'),
      categoryId: CATEGORIES['EDS'].id,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
      tags: ['new'],
    });
  });

  await prisma.agency.createMany({
    data: baseItems,
  });
}
