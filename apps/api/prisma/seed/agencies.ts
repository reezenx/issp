import { Agency, PrismaClient } from '@prisma/client';
import { AGENCIES, CATEGORIES } from './constant';
import { faker } from '@faker-js/faker';
import { DateTime } from 'luxon';

export async function createAgencies(prisma: PrismaClient) {
  const baseAgencies: Agency[] = [];

  Object.entries(AGENCIES).forEach(([key, value]) => {
    baseAgencies.push({
      id: value.id,
      name: value.name,
      code: value.code,
      email: value.email,
      phone: faker.helpers.fromRegExp('09[0-9]{9}'),
      categoryId: CATEGORIES['EDS'].id,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
    });
  });

  await prisma.agency.createMany({
    data: baseAgencies,
  });
}
