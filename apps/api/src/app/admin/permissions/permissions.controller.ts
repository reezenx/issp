import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
  Put,
} from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { CreatePermissionDto } from './dto/create-permissions.dto';
import { UpdatePermissionDto } from './dto/update-permission.dto';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';
import { ApiTags, ApiBearerAuth, ApiCreatedResponse } from '@nestjs/swagger';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { PermissionEntity } from './entities/permission.entity';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

@ApiTags('admin/permissions')
@Controller('admin/permissions')
export class PermissionsController {
  constructor(private readonly permissionsService: PermissionsService) {}

  @checkAbilities({ action: 'create', subject: 'Permission' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PermissionEntity })
  @Post()
  async create(
    @Body() CreatePermissionDto: CreatePermissionDto,
    @CurrentUser() user: User
  ) {
    return new PermissionEntity(
      await this.permissionsService.create(CreatePermissionDto, user)
    );
  }

  @checkAbilities({ action: 'read', subject: 'Permission' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PermissionEntity, isArray: true })
  @Get()
  async findAll() {
    const categories = await this.permissionsService.findAll();
    return categories.map((item) => new PermissionEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'Permission' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.permissionsService.findAllDropdown();
    return items.map(
      (item) =>
        new ItemEntityDropdown({
          id: item.id,
          name: `${item.action} ${item.subject}`,
        })
    );
  }

  @checkAbilities({ action: 'read', subject: 'Permission' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PermissionEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new PermissionEntity(await this.permissionsService.findOne(id));
  }

  @checkAbilities({ action: 'update', subject: 'Permission' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PermissionEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePermissionDto: UpdatePermissionDto,
    @CurrentUser() user: User
  ) {
    return new PermissionEntity(
      await this.permissionsService.update(id, updatePermissionDto, user)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'Permission' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: PermissionEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new PermissionEntity(await this.permissionsService.remove(id));
  }
}
