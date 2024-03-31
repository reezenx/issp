import { ApiProperty } from '@nestjs/swagger';
import { UserEntity } from '../../admin/users/entities/user.entity';
import { Permission, UserRole } from '@prisma/client';

export class AuthEntity extends UserEntity {
  constructor(user: AuthEntity) {
    super(user);
    Object.assign(this, user);
  }

  @ApiProperty()
  roles?: (Pick<UserRole, 'name'> & {
    permissions?: Pick<Permission, 'action' | 'conditions' | 'subject'>;
  })[];
}
