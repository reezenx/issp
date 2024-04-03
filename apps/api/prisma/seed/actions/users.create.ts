import {
  Category,
  Department,
  PrismaClient,
  User,
  UserRole,
  UserStatus,
} from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { AGENCY, CATEGORY, DEPARTMENT, ROLE, USER } from '../data/data';

export const DEFAULT = {
  PW: 'ChangeM3!',
  _PW: '8%GVnnFit6viNS5O',
};

export const USERS: {
  [key: string]: Pick<User, 'id' | 'email'> & {
    role: Pick<UserRole, 'id' | 'name'>;
    category: Pick<Category, 'id' | 'code' | 'name'>;
    department: Pick<Department, 'id' | 'name' | 'code' | 'uacs'>;
  };
} = {
  SUPER_ADMIN: {
    ...USER.SUPER_ADMIN,
    role: ROLE.SUPER_ADMIN,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  ADMIN: {
    ...USER.ADMIN,
    role: ROLE.ADMIN,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  VIEWER: {
    ...USER.VIEWER,
    role: ROLE.VIEWER,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  EVALUATOR: {
    ...USER.EVALUATOR,
    role: ROLE.EVALUATOR,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  PLANNER: {
    ...USER.PLANNER,
    role: ROLE.PLANNER,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DILG,
  },
  ENDORSER: {
    ...USER.ENDORSER,
    role: ROLE.ENDORSER,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
  APPROVER: {
    ...USER.APPROVER,
    role: ROLE.APPROVER,
    category: CATEGORY.EDS,
    department: DEPARTMENT.DICT,
  },
};

export const roundsOfHashing = 10;
export async function createUsers(prisma: PrismaClient) {
  const superPassword = await bcrypt.hash(DEFAULT._PW, roundsOfHashing);
  const userPassword = await bcrypt.hash(DEFAULT.PW, roundsOfHashing);

  Object.entries(USERS).forEach(
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async ([key, { id, email, role, department, category }]) => {
      const item = {
        email,
        password:
          role.name === ROLE.SUPER_ADMIN.name ? superPassword : userPassword,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        phone: faker.helpers.fromRegExp('09[0-9]{9}'),
        status: UserStatus.ACTIVE,
        createdAt: new Date(),
        createdBy: 'System',
        tags: ['new'],
      };

      await prisma.user.upsert({
        where: { email },
        update: item,
        create: {
          ...item,
          agency: {
            connectOrCreate: {
              where: {
                id: AGENCY.DICT_EGOV.id,
              },
              create: {
                ...AGENCY.DICT_EGOV,
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
          roles: {
            connectOrCreate: {
              where: {
                id: role.id,
              },
              create: {
                ...role,
                createdBy: 'System',
              },
            },
          },
          userRole: {
            connectOrCreate: {
              where: {
                id: role.id,
              },
              create: {
                ...role,
                createdBy: 'System',
              },
            },
          },
        },
      });
    }
  );

  // await prisma.user.update({
  //   where: {
  //     id: USERS.PLANNER.id,
  //   },
  //   data: {
  //     roles: {
  //       connect: [
  //         {
  //           id: ROLE.PLANNER.id,
  //         },
  //         {
  //           id: ROLE.ADMIN.id,
  //         },
  //       ],
  //     },
  //   },
  // });
  // await prisma.user.update({
  //   where: {
  //     id: USERS.ADMIN.id,
  //   },
  //   data: {
  //     roles: {
  //       connect: [
  //         {
  //           id: ROLE.APPROVER.id,
  //         },
  //         {
  //           id: ROLE.EVALUATOR.id,
  //         },
  //         {
  //           id: ROLE.VALIDATOR.id,
  //         },
  //       ],
  //     },
  //   },
  // });
}
