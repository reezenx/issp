import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { P1OrgProfileS1Service } from './p1-org-profile-s1.service';
import { CreateP1OrgProfileS1Dto } from './dto/create-p1-org-profile-s1.dto';
import { UpdateP1OrgProfileS1Dto } from './dto/update-p1-org-profile-s1.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { checkAbilities } from '../../../../auth/decorators/abilities.decorator';
import { AbilitiesGuard } from '../../../../auth/guard/abilities.guard';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';

@ApiTags('user/issps/p1-org-profile-s1')
@Controller('user/issps/p1-org-profile-s1')
export class P1OrgProfileS1Controller {
  constructor(private readonly p1OrgProfileS1Service: P1OrgProfileS1Service) {}

  @checkAbilities({ action: 'create', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Post()
  create(
    @Body() createP1OrgProfileS1Dto: CreateP1OrgProfileS1Dto,
    @CurrentUser() user: User
  ) {
    return this.p1OrgProfileS1Service.create(createP1OrgProfileS1Dto, user);
  }

  @checkAbilities({ action: 'read', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.p1OrgProfileS1Service.findAll();
  }

  @checkAbilities({ action: 'read', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.p1OrgProfileS1Service.findOne(id);
  }

  @checkAbilities({ action: 'update', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateP1OrgProfileS1Dto: UpdateP1OrgProfileS1Dto,
    @CurrentUser() user: User
  ) {
    return this.p1OrgProfileS1Service.update(id, updateP1OrgProfileS1Dto, user);
  }

  @checkAbilities({ action: 'delete', subject: 'ISSP' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.p1OrgProfileS1Service.remove(id);
  }
}
