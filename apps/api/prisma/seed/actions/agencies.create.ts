import { Agency, Category, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { AGENCY, CATEGORY } from '../data/data';

export const AGENCIES: {
  [key: string]: Pick<Agency, 'id' | 'email' | 'name' | 'code'> & {
    category: Pick<Category, 'id' | 'code' | 'name'>;
  };
} = {
  DICT: {
    ...AGENCY.DICT,
    category: CATEGORY.EDS,
  },
  DILG: {
    ...AGENCY.DILG,
    category: CATEGORY.EDC,
  },
  DAR: {
    ...AGENCY.DAR,
    category: CATEGORY.FEC,
  },
  DA: {
    ...AGENCY.DA,
    category: CATEGORY.GGS,
  },
  DBM: {
    ...AGENCY.DBM,
    category: CATEGORY.HDS,
  },
  DE: {
    ...AGENCY.DE,
    category: CATEGORY.SPJ,
  },
};

export async function createAgencies(prisma: PrismaClient) {
  Object.entries(AGENCIES).forEach(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ([key, { id, name, code, email, category }]) => {
      const item = {
        id,
        name,
        code,
        email,
        phone: faker.helpers.fromRegExp('09[0-9]{9}'),
        createdAt: new Date(),
        createdBy: 'System',
        tags: ['new'],
      };

      await prisma.agency.upsert({
        where: { code },
        update: {
          name,
          code,
        },
        create: {
          ...item,
          category: {
            connectOrCreate: {
              where: {
                id: category.id,
              },
              create: {
                ...category,
                createdBy: 'System',
              },
            },
          },
        },
      });
    }
  );
}
