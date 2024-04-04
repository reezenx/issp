import {
  ISSP,
  ISSPStatus,
  PrismaClient,
  Agency,
  User,
  Category,
  UserStatus,
  UserRole,
  Department,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { AGENCY, CATEGORY, DEPARTMENT, ISSP_, ROLE, USER } from '../data/data';
import * as bcrypt from 'bcrypt';
import { DEFAULT, roundsOfHashing } from './users.create';
import { findDuplicates } from './helper.create';

export const ISSPS: {
  [key: string]: Pick<ISSP, 'id' | 'title' | 'startYear' | 'endYear'> & {
    agency: Pick<Agency, 'id' | 'name' | 'email' | 'code' | 'uacs'>;
    role: Pick<UserRole, 'id' | 'name'>;
    author: Pick<User, 'id' | 'email'>;
    category: Pick<Category, 'id' | 'code' | 'name'>;
    department: Pick<Department, 'id' | 'name' | 'code' | 'uacs'>;
  };
} = {
  DICT_ISSP: {
    ...ISSP_.DICT,
    agency: AGENCY.DICT_EGOV,
    role: ROLE.PLANNER,
    author: USER.PLANNER,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  DILG_ISSP: {
    ...ISSP_.DILG,
    agency: AGENCY.DILG_BFP,
    author: USER.PLANNER,
    role: ROLE.PLANNER,
    category: CATEGORY.EDC,
    department: DEPARTMENT.DILG,
  },
  DAR_ISSP: {
    ...ISSP_.DAR,
    agency: AGENCY.DAR_OS,
    author: USER.PLANNER,
    role: ROLE.PLANNER,
    category: CATEGORY.FEC,
    department: DEPARTMENT.DAR,
  },
  DE_ISSP: {
    ...ISSP_.DE,
    agency: AGENCY.DE_NBDB,
    author: USER.PLANNER,
    role: ROLE.PLANNER,
    category: CATEGORY.SPJ,
    department: DEPARTMENT.DE,
  },
  DA_ISSP: {
    ...ISSP_.DA,
    agency: AGENCY.DA_AGCPC,
    author: USER.PLANNER,
    role: ROLE.PLANNER,
    category: CATEGORY.GGS,
    department: DEPARTMENT.DA,
  },
};

export async function createISSPs(prisma: PrismaClient) {
  findDuplicates(ISSPS);
  Object.entries(ISSPS).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      {
        id,
        title,
        startYear,
        endYear,
        agency,
        author,
        role,
        category,
        department,
      },
    ]) => {
      const description = faker.commerce.productDescription();
      const tags = ['new', 'dict'];
      const version = 1;
      const item = {
        id,
        title,
        startYear,
        endYear,
        description,
        tags,
        version,
        status: ISSPStatus.NOT_STARTED,
        createdAt: new Date(),
        createdBy: 'System',
        readOnly: false,
      };

      await prisma.iSSP.upsert({
        where: { id },
        update: {
          title,
          startYear,
          endYear,
          description,
          tags,
          version,
        },
        create: {
          ...item,
          agency: {
            connectOrCreate: {
              where: {
                id: agency.id,
              },
              create: {
                ...agency,
                createdBy: 'System',
                phone: faker.helpers.fromRegExp('09[0-9]{9}'),
                uacs: agency.uacs,
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
            },
          },
          author: {
            connectOrCreate: {
              where: {
                email: author.email,
              },
              create: {
                ...author,
                createdBy: 'System',
                password: await bcrypt.hash(DEFAULT.PW, roundsOfHashing),
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                phone: faker.helpers.fromRegExp('09[0-9]{9}'),
                status: UserStatus.ACTIVE,
                createdAt: new Date(),
                agencyId: agency.id,
                roleId: role.id,
              },
            },
          },
        },
      });
    }
  );
}
