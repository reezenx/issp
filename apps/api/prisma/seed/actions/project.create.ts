import { PrismaClient } from '@prisma/client';
import { PROJECT } from '../data/projects.data';
import { faker } from '@faker-js/faker';
import { findDuplicates } from './helper.create';

export async function createProjects(prisma: PrismaClient) {
  findDuplicates(PROJECT);

  Object.entries(PROJECT).forEach(
    async ([
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      key,
      { id, title, cost, quantity, unit },
    ]) => {
      const description = faker.commerce.productDescription();
      const tags = ['new', 'dict'];
      const item = {
        id,
        title,
        description,
        tags,
        cost,
        quantity,
        unit,
        createdAt: new Date(),
        createdBy: 'System',
        readOnly: false,
      };

      await prisma.project.upsert({
        where: { id },
        update: {
          title,
          description,
          tags,
        },
        create: {
          ...item,
        },
      });
    }
  );
}
