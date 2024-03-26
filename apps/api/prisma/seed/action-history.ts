import { Action_History, PrismaClient } from '@prisma/client';
import { ACTION_HISTORY, ISSPS } from './dev-data';
import { DateTime } from 'luxon';

export async function createActionHistory(prisma: PrismaClient) {
  const baseItems: Action_History[] = [];

  Object.entries(ACTION_HISTORY).forEach(
    ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, userId, parentModule, childModule, changes, isspVersion, action },
    ]) => {
      baseItems.push({
        id,
        userId,
        action,
        changes,
        isspVersion,
        childModule,
        parentModule,
        isspId: ISSPS.DICT_ISSP.id,
        createdAt: DateTime.now().toJSDate(),
        createdBy: 'System',
        tags: ['actions'],
      });
    }
  );

  await prisma.action_History.createMany({
    data: baseItems,
  });
}
