import { ActionHistory, PrismaClient, User, UserStatus } from '@prisma/client';
import { DateTime } from 'luxon';
import { ISSPS } from './issps.create';
import { ACTION_HISTORY, AGENCY, USER } from '../data/data';
import { faker } from '@faker-js/faker';
import * as bcrypt from 'bcrypt';
import { DEFAULT, roundsOfHashing } from './users.create';

export const ACTION_HISTORIES: {
  [key: string]: Pick<
    ActionHistory,
    'id' | 'parentModule' | 'childModule' | 'changes' | 'action' | 'isspVersion'
  > & {
    user: Pick<User, 'id' | 'email'>;
  };
} = {
  DICT_ISSP_1: {
    ...ACTION_HISTORY.DICT_ISSP_1,
    user: USER.PLANNER,
  },
  DICT_ISSP_2: {
    ...ACTION_HISTORY.DICT_ISSP_2,
    user: USER.ADMIN,
  },
  DICT_ISSP_3: {
    ...ACTION_HISTORY.DICT_ISSP_3,
    user: USER.ENDORSER,
  },
  DICT_ISSP_4: {
    ...ACTION_HISTORY.DICT_ISSP_4,
    user: USER.EVALUATOR,
  },
  DICT_ISSP_5: {
    ...ACTION_HISTORY.DICT_ISSP_5,
    user: USER.APPROVER,
  },
};

export async function createActionHistory(prisma: PrismaClient) {
  Object.entries(ACTION_HISTORIES).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, user, parentModule, childModule, changes, isspVersion, action },
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
                id: user.id,
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
                agencyId: AGENCY.DICT.id,
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
