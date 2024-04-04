import {
  ActionHistory,
  PrismaClient,
  User,
  UserRole,
  UserStatus,
} from '@prisma/client';
import { DateTime } from 'luxon';
import { ISSPS } from './issps.create';
import { ACTION_HISTORY, AGENCY, ROLE, USER } from '../data/data';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import { DEFAULT, roundsOfHashing } from './users.create';
import { findDuplicates } from './helper.create';

export const ACTION_HISTORIES: {
  [key: string]: Pick<
    ActionHistory,
    'id' | 'parentModule' | 'childModule' | 'changes' | 'action' | 'isspVersion'
  > & {
    user: Pick<User, 'id' | 'email'>;
    role: Pick<UserRole, 'id' | 'name'>;
  };
} = {
  DICT_ISSP_1: {
    ...ACTION_HISTORY.DICT_ISSP_1,
    user: USER.PLANNER,
    role: ROLE.PLANNER,
  },
  DICT_ISSP_2: {
    ...ACTION_HISTORY.DICT_ISSP_2,
    user: USER.ADMIN,
    role: ROLE.ADMIN,
  },
  DICT_ISSP_3: {
    ...ACTION_HISTORY.DICT_ISSP_3,
    user: USER.ENDORSER,
    role: ROLE.ENDORSER,
  },
  DICT_ISSP_4: {
    ...ACTION_HISTORY.DICT_ISSP_4,
    user: USER.EVALUATOR,
    role: ROLE.EVALUATOR,
  },
  DICT_ISSP_5: {
    ...ACTION_HISTORY.DICT_ISSP_5,
    user: USER.APPROVER,
    role: ROLE.APPROVER,
  },
};

export async function createActionHistory(prisma: PrismaClient) {
  findDuplicates(ACTION_HISTORIES);
  Object.entries(ACTION_HISTORIES).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      {
        id,
        user,
        role,
        parentModule,
        childModule,
        changes,
        isspVersion,
        action,
      },
    ]) => {
      const item = {
        id,
        action,
        changes,
        isspVersion,
        childModule,
        parentModule,
        createdAt: DateTime.now().toJSDate(),
        createdBy: 'System',
        tags: ['actions'],
      };

      await prisma.actionHistory.upsert({
        where: { id },
        update: item,
        create: {
          ...item,
          user: {
            connectOrCreate: {
              where: {
                email: user.email,
              },
              create: {
                ...user,
                createdBy: 'System',
                firstName: faker.person.firstName(),
                lastName: faker.person.lastName(),
                phone: faker.helpers.fromRegExp('09[0-9]{9}'),
                status: UserStatus.ACTIVE,
                createdAt: new Date(),
                password: await bcrypt.hash(DEFAULT.PW, roundsOfHashing),
                agencyId: AGENCY.DICT_EGOV.id,
                roleId: role.id,
              },
            },
          },
          issp: {
            connect: {
              id: ISSPS.DICT_ISSP.id,
            },
          },
        },
      });
    }
  );
}
