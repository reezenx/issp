import { Agency, Category, Department, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';
import { AGENCY, CATEGORY, DEPARTMENT } from '../data/data';
import { findDuplicates } from './helper.create';

export const AGENCIES: {
  [key: string]: Pick<Agency, 'id' | 'email' | 'name' | 'code' | 'uacs'> & {
    category: Pick<Category, 'id' | 'code' | 'name'>;
    department: Pick<Department, 'id' | 'name' | 'code' | 'uacs'>;
  };
} = {
  DICT_EGOV: {
    ...AGENCY.DICT_EGOV,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  DILG_BFP: {
    ...AGENCY.DILG_BFP,
    category: CATEGORY.EDC,
    department: DEPARTMENT.DILG,
  },
  DAR_OS: {
    ...AGENCY.DAR_OS,
    category: CATEGORY.FEC,
    department: DEPARTMENT.DAR,
  },
  DA_AGCPC: {
    ...AGENCY.DA_AGCPC,
    category: CATEGORY.GGS,
    department: DEPARTMENT.DA,
  },
  DBM_PS: {
    ...AGENCY.DBM_PS,
    category: CATEGORY.HDS,
    department: DEPARTMENT.DBM,
  },
  DE_NBDB: {
    ...AGENCY.DE_NBDB,
    category: CATEGORY.SPJ,
    department: DEPARTMENT.DE,
  },
};

export async function createAgencies(prisma: PrismaClient) {
  const phone = faker.helpers.fromRegExp('09[0-9]{9}');

  findDuplicates(AGENCIES);

  Object.entries(AGENCIES).forEach(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ([key, { id, name, code, email, category, uacs, department }]) => {
      const item = {
        id,
        name,
        code,
        email,
        uacs,
        phone,
        createdAt: new Date(),
        createdBy: 'System',
        tags: ['new'],
      };

      await prisma.agency.upsert({
        where: { id },
        update: {
          name,
          code,
          email,
          uacs,
          phone,
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
          department: {
            connectOrCreate: {
              where: {
                id: department.id,
              },
              create: {
                ...department,
                createdBy: 'System',
              },
            },
          },
        },
      });
    }
  );
}
