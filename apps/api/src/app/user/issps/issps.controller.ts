import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { IsspService } from './issps.service';
import { CreateIsspDto } from './dto/create-issp.dto';
import { UpdateIsspDto } from './dto/update-issp.dto';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { IsspEntity } from './entities/issp.entity';

@ApiTags('user/issps')
@Controller('user/issps')
export class IsspController {
  constructor(private readonly isspService: IsspService) {}

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Post()
  async create(@Body() createIsspDto: CreateIsspDto) {
    return new IsspEntity(await this.isspService.create(createIsspDto));
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity, isArray: true })
  @Get()
  async findAll() {
    const issps = await this.isspService.findAll();
    return issps.map((issp) => new IsspEntity(issp));
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new IsspEntity(await this.isspService.findOne(id));
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Put(':id')
  async update(@Param('id') id: string, @Body() updateIsspDto: UpdateIsspDto) {
    return new IsspEntity(await this.isspService.update(id, updateIsspDto));
  }

  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new IsspEntity(await this.isspService.remove(id));
  }
}
