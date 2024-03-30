import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import { UserEntity } from '../../admin/users/entities/user.entity';

@Injectable()
export class UserService {
  // private blockedFields: (keyof User)[] = [
  //   'password',
  //   'sessionToken',
  //   'email',
  //   'facebookId',
  //   'googleId',
  //   'appleId',
  // ];

  // unpopulatedFields = '-' + this.blockedFields.join(' -');

  constructor(private prisma: PrismaService) {}

  // getUserByName(name: string) {
  //   const username = { $regex: new RegExp(`^${name}$`, 'i') };

  //   return this.userModel.findOne({ username });
  // }

  // async validateUserByName(username: string) {
  //   const user = await this.getUserByName(username);

  //   if (!user) {
  //     throw new NotFoundException('User not found');
  //   }

  //   return user;
  // }

  getUserByEmail(email: string) {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async validateUserByEmail(email: string) {
    const user = await this.getUserByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  // getUserBy(filter: FilterQuery<User>) {
  //   return this.userModel.findOne(filter);
  // }

  // getUserByGoogleId(id: string) {
  //   return this.userModel.findOne({ googleId: id });
  // }

  getUserById(id: string) {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async validateUserById(id: string) {
    const user = await this.getUserById(id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return new UserEntity(user);
  }

  // getOnlineUsers() {
  //   return this.userModel.find({ online: true });
  // }

  // async subscribeSocket(socket: Socket, user: User) {
  //   await this.socketConnectionService.create(socket, user);

  //   return socket.join(`user_${user._id}`);
  // }

  // async unsubscribeSocket(socket: Socket, user: User) {
  //   await this.socketConnectionService.delete(socket);

  //   return socket.leave(`user_${user._id}`);
  // }

  // sendMessage<T>(user: User, event: string, message?: T) {
  //   return this.userGateway.server.to(`user_${user._id}`).emit(event, message);
  // }

  // sendMessageExcept<T>(except: Socket, user: User, event: string, message: T) {
  //   return except.broadcast.to(`user_${user._id}`).emit(event, message);
  // }

  // async generateUsername(base: string) {
  //   const name = base.replace(/\s/g, '');

  //   if (!(await this.getUserByName(name))) {
  //     return name;
  //   }

  //   return this.generateUsername(name + randomString(1));
  // }

  // async getUser(email: string) {
  //   return (
  //     (await this.getUserByName(username)) ??
  //     (await this.getUserByEmail(email))
  //   );
  // }

  // filterUser(user: User, allowedFields: (keyof User)[] = []) {
  //   const userObject = user.toObject({ virtuals: true });

  //   for (const field of this.blockedFields) {
  //     if (allowedFields.includes(field)) {
  //       continue;
  //     }

  //     delete userObject[field];
  //   }

  //   return userObject;
  // }

  // async create(body: Partial<User>) {
  //   const user = await this.userModel.create(body);

  //   user.generateSessionToken();

  //   return user.save();
  // }
}
