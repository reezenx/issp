import { PrismaClient, User, UserRole, UserStatus } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { AGENCY, CATEGORY, ROLE, USER } from '../data/data';

export const DEFAULT = {
  PW: 'ChangeM3!',
  _PW: '8%GVnnFit6viNS5O',
};

export const USERS: {
  [key: string]: Pick<User, 'id' | 'email'> & {
    role: Pick<UserRole, 'id' | 'name'>;
  };
} = {
  SUPER_ADMIN: {
    ...USER.SUPER_ADMIN,
    role: ROLE.SUPER_ADMIN,
  },
  ADMIN: {
    ...USER.ADMIN,
    role: ROLE.ADMIN,
  },
  VIEWER: {
    ...USER.VIEWER,
    role: ROLE.VIEWER,
  },
  EVALUATOR: {
    ...USER.EVALUATOR,
    role: ROLE.EVALUATOR,
  },
  PLANNER: {
    ...USER.PLANNER,
    role: ROLE.PLANNER,
  },
  ENDORSER: {
    ...USER.ENDORSER,
    role: ROLE.ENDORSER,
  },
  APPROVER: {
    ...USER.APPROVER,
    role: ROLE.APPROVER,
  },
};

export const roundsOfHashing = 10;
export async function createUsers(prisma: PrismaClient) {
  const superPassword = await bcrypt.hash(DEFAULT._PW, roundsOfHashing);
  const userPassword = await bcrypt.hash(DEFAULT.PW, roundsOfHashing);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(USERS).forEach(async ([key, { id, email, role }]) => {
    const item = {
      id,
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
              id: AGENCY.DICT.id,
            },
            create: {
              ...AGENCY.DICT,
              createdBy: 'System',
              phone: faker.helpers.fromRegExp('09[0-9]{9}'),
              category: {
                connect: {
                  id: CATEGORY.EDC.id,
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
  });

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
