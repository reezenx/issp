import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';

@ApiTags('admin/users')
@Controller('admin/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @checkAbilities({ action: 'create', subject: 'User' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @Post()
  async create(
    @Body() createUserDto: CreateUserDto,
    @CurrentUser() user: User
  ) {
    return new UserEntity(await this.usersService.create(createUserDto, user));
  }

  @checkAbilities({ action: 'read', subject: 'User' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity, isArray: true })
  @Get()
  async findAll() {
    const users = await this.usersService.findAll();
    return users.map((user) => new UserEntity(user));
  }

  @checkAbilities({ action: 'read', subject: 'User' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new UserEntity(await this.usersService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'User' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
    @CurrentUser() user: User
  ) {
    return new UserEntity(
      await this.usersService.update(id, updateUserDto, user)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'User' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new UserEntity(await this.usersService.remove(id));
  }
}
