import { PrismaClient, Role, User, User_Status } from '@prisma/client';
import * as bcrypt from 'bcrypt';
import { faker } from '@faker-js/faker';
import { AGENCIES, DEFAULT, USERS } from './constant';
import { DateTime } from 'luxon';

export async function createUsers(prisma: PrismaClient) {
  const roundsOfHashing = 10;
  const superPassword = await bcrypt.hash(
    USERS.SUPER_ADMIN.password,
    roundsOfHashing
  );
  const userPassword = await bcrypt.hash(DEFAULT.PW, roundsOfHashing);

  // base users
  const baseUsers: User[] = [];
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(USERS).forEach(([key, { id, email, role }]) => {
    baseUsers.push({
      id,
      email,
      role,
      password: role.includes(Role.SUPER_ADMIN) ? superPassword : userPassword,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      phone: faker.helpers.fromRegExp('09[0-9]{9}'),
      status: User_Status.ACTIVE,
      agencyId: AGENCIES['DICT'].id,
      createdAt: DateTime.now().toJSDate(),
      updatedAt: DateTime.now().toJSDate(),
      createdBy: 'System',
      updatedBy: 'System',
      tags: ['new'],
      authoredIsspIds: [],
      // history: [],
    });
  });

  await prisma.user.createMany({
    data: baseUsers,
  });

  // const user1 = await prisma.user.upsert({
  //   where: { email: USER.SUPER_ADMIN.email },
  //   update: {
  //     password: superPassword,
  //   },
  //   create: {
  //     email: USER.SUPER_ADMIN.email,
  //     password: superPassword,
  //     firstName: faker.person.firstName(),
  //     lastName: faker.person.lastName(),
  //     phone: faker.phone.number(),
  //   },
  // });

  // const user2 = await prisma.user.upsert({
  //   where: { email: 'alex@ruheni.com' },
  //   update: {
  //     password: password,
  //   },
  //   create: {
  //     email: 'alex@ruheni.com',
  //     name: 'Alex Ruheni',
  //     password: password,
  //   },
  // });
}
