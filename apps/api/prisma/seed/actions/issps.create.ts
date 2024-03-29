import {
  ISSP,
  ISSPStatus,
  PrismaClient,
  Agency,
  User,
  Category,
  UserStatus,
} from '@prisma/client';
import { faker } from '@faker-js/faker';
import { AGENCY, CATEGORY, ISSP_, USER } from '../data/data';
import * as bcrypt from 'bcrypt';
import { DEFAULT, roundsOfHashing } from './users.create';

export const ISSPS: {
  [key: string]: Pick<ISSP, 'id' | 'title' | 'startYear' | 'endYear'> & {
    agency: Pick<Agency, 'id' | 'name' | 'email' | 'code'>;
    author: Pick<User, 'id' | 'email'>;
    category: Pick<Category, 'id' | 'code' | 'name'>;
  };
} = {
  DICT_ISSP: {
    ...ISSP_.DICT,
    agency: AGENCY.DICT,
    author: USER.PLANNER,
    category: CATEGORY.EDS,
  },
  DILG_ISSP: {
    ...ISSP_.DILG,
    agency: AGENCY.DILG,
    author: USER.PLANNER,
    category: CATEGORY.EDC,
  },
  DAR_ISSP: {
    ...ISSP_.DAR,
    agency: AGENCY.DAR,
    author: USER.PLANNER,
    category: CATEGORY.FEC,
  },
  DE_ISSP: {
    ...ISSP_.DE,
    agency: AGENCY.DE,
    author: USER.PLANNER,
    category: CATEGORY.SPJ,
  },
  DA_ISSP: {
    ...ISSP_.DA,
    agency: AGENCY.DA,
    author: USER.PLANNER,
    category: CATEGORY.GGS,
  },
};

export async function createISSPs(prisma: PrismaClient) {
  Object.entries(ISSPS).forEach(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ([
      key,
      { id, title, startYear, endYear, agency, author, category },
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
            },
          },
          author: {
            connectOrCreate: {
              where: {
                id: author.id,
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
              },
            },
          },
        },
      });
    }
  );
}
