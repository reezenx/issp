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
import { UserRolesService } from './user-roles.service';
import { CreateUserRoleDto } from './dto/create-user-role.dto';
import { UpdateUserRoleDto } from './dto/update-user-role.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { UserRoleEntity } from './entities/user-roles.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { User } from '@prisma/client';
import { CurrentUser } from '@issp/api-auth';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

@ApiTags('admin/user-roles')
@Controller('admin/user-roles')
export class UserRolesController {
  constructor(private readonly userRolesService: UserRolesService) {}

  @checkAbilities({ action: 'create', subject: 'UserRole' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserRoleEntity })
  @Post()
  async create(
    @Body() createUserDto: CreateUserRoleDto,
    @CurrentUser() user: User
  ) {
    return new UserRoleEntity(
      await this.userRolesService.create(createUserDto, user)
    );
  }

  @checkAbilities({ action: 'read', subject: 'UserRole' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserRoleEntity, isArray: true })
  @Get()
  async findAll() {
    const users = await this.userRolesService.findAll();
    return users.map((user) => new UserRoleEntity(user));
  }

  @checkAbilities({ action: 'read', subject: 'UserRole' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.userRolesService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'UserRole' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserRoleEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new UserRoleEntity(await this.userRolesService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'UserRole' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserRoleEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserRoleDto,
    @CurrentUser() user: User
  ) {
    return new UserRoleEntity(
      await this.userRolesService.update(id, updateUserDto, user)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'UserRole' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: UserRoleEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new UserRoleEntity(await this.userRolesService.remove(id));
  }
}
