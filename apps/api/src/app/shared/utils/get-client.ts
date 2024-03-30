import { ExecutionContext } from '@nestjs/common';
import { Dictionary } from 'code-config';
import { UserEntity } from '../../admin/users/entities/user.entity';

export interface Client {
  headers: Dictionary<string>;
  user: UserEntity;
  // room?: Room;
}

export const getClient = <T = Client>(ctx: ExecutionContext): T => {
  switch (ctx.getType()) {
    case 'ws':
      return ctx.switchToWs().getClient().handshake;
    case 'http':
      return ctx.switchToHttp().getRequest();
    default:
      return undefined;
  }
};
