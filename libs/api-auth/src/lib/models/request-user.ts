import { UserRole } from '@prisma/client';

export class RequestUser {
  id!: string;
  roles?: Pick<UserRole, 'name'>[];
}
