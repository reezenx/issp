import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { P1OrgProfileS2Service } from './p1-org-profile-s2.service';
import { CreateP1OrgProfileS2Dto } from './dto/create-p1-org-profile-s2.dto';
import { UpdateP1OrgProfileS2Dto } from './dto/update-p1-org-profile-s2.dto';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { checkAbilities } from '../../../../auth/decorators/abilities.decorator';
import { AbilitiesGuard } from '../../../../auth/guard/abilities.guard';
import { CurrentUser } from '@issp/api-auth';
import { User } from '@prisma/client';

@ApiTags('user/issps/p1-org-profile-s2')
@Controller('user/issps/p1-org-profile-s2')
export class P1OrgProfileS2Controller {
  constructor(private readonly p1OrgProfileS2Service: P1OrgProfileS2Service) {}

  @checkAbilities({ action: 'create', subject: 'ISSPP1OrgProfileS2' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Post()
  create(
    @Body() createP1OrgProfileS2Dto: CreateP1OrgProfileS2Dto,
    @CurrentUser() user: User
  ) {
    return this.p1OrgProfileS2Service.create(createP1OrgProfileS2Dto, user);
  }

  @checkAbilities({ action: 'read', subject: 'ISSPP1OrgProfileS2' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get()
  findAll() {
    return this.p1OrgProfileS2Service.findAll();
  }

  @checkAbilities({ action: 'read', subject: 'ISSPP1OrgProfileS2' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.p1OrgProfileS2Service.findOne(id);
  }

  @checkAbilities({ action: 'update', subject: 'ISSPP1OrgProfileS2' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateP1OrgProfileS2Dto: UpdateP1OrgProfileS2Dto,
    @CurrentUser() user: User
  ) {
    return this.p1OrgProfileS2Service.update(id, updateP1OrgProfileS2Dto, user);
  }

  @checkAbilities({ action: 'delete', subject: 'ISSPP1OrgProfileS2' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.p1OrgProfileS2Service.remove(id);
  }
}
