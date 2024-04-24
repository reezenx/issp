import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { P1OrgProfileS2Service } from './p1-org-profile-s2.service';
import { CreateP1OrgProfileS2Dto } from './dto/create-p1-org-profile-s2.dto';
import { UpdateP1OrgProfileS2Dto } from './dto/update-p1-org-profile-s2.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('user/issps/p1-org-profile-s2')
@Controller('user/issps/p1-org-profile-s2')
export class P1OrgProfileS2Controller {
  constructor(private readonly p1OrgProfileS2Service: P1OrgProfileS2Service) {}

  @Post()
  create(@Body() createP1OrgProfileS2Dto: CreateP1OrgProfileS2Dto) {
    return this.p1OrgProfileS2Service.create(createP1OrgProfileS2Dto);
  }

  @Get()
  findAll() {
    return this.p1OrgProfileS2Service.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.p1OrgProfileS2Service.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateP1OrgProfileS2Dto: UpdateP1OrgProfileS2Dto
  ) {
    return this.p1OrgProfileS2Service.update(+id, updateP1OrgProfileS2Dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.p1OrgProfileS2Service.remove(+id);
  }
}
