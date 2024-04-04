import { PrismaClient } from '@prisma/client';

export type Item = {
  id: string;
  name: string;
  code: string;
};

export type ModelDelegate =
  | 'category'
  | 'projectType'
  | 'projectTypeGroup'
  | 'projectCategory'
  | 'implementationType'
  | 'budgetSource'
  | 'budgetType';

export type ItemObj = {
  [key: string]: Item;
};

export type DBItem = {
  id: string;
  name: string;
  code: string;
  createdAt: Date;
  createdBy: string;
};

export type PrismaArgs = {
  where: { id: string };
  create: DBItem;
  update: Omit<DBItem, 'id'>;
};

export function createItem({ id, name, code }: Item): DBItem {
  const createdBy = 'System';
  const createdAt = new Date();
  const item = {
    id,
    name,
    code,
    createdAt,
    createdBy,
  };

  return item;
}

export function createPrismaArgs({
  id,
  name,
  code,
  createdAt,
  createdBy,
}: DBItem): PrismaArgs {
  return {
    where: { id },
    create: { id, name, code, createdAt, createdBy },
    update: { name, code, createdAt, createdBy },
  };
}

export async function upsertItems(
  prisma: PrismaClient,
  model: ModelDelegate,
  itemsObj: ItemObj
) {
  const modelDelegates: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key in ModelDelegate]: any;
  } = {
    category: prisma.category,
    projectType: prisma.projectType,
    projectTypeGroup: prisma.projectTypeGroup,
    projectCategory: prisma.projectCategory,
    implementationType: prisma.projectImplementationType,
    budgetSource: prisma.budgetSource,
    budgetType: prisma.budgetType,
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  Object.entries(itemsObj).forEach(async ([key, { id, name, code }]) => {
    const item = createItem({ id, name, code });
    await modelDelegates[model].upsert(createPrismaArgs(item));
  });
}

export function findDuplicates(data: object, prop: 'id' | 'code' = 'id') {
  const propMap = {};
  const duplicates: string[] = [];

  for (const key in data) {
    // eslint-disable-next-line no-prototype-builtins
    if (data.hasOwnProperty(key)) {
      const property = data[key][prop];

      // If prop already exists in the propMap, it's a duplicate
      if (propMap[property]) {
        duplicates.push(property);
      } else {
        // Otherwise, add it to the propMap
        propMap[property] = true;
      }
    }
  }

  if (duplicates.length > 0) {
    console.log(`duplicate ${prop} - ${duplicates}`);
  }

  return duplicates;
}
