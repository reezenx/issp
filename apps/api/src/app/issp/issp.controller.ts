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
import { IsspService } from './issp.service';
import { CreateIsspDto } from './dto/create-issp.dto';
import { UpdateIsspDto } from './dto/update-issp.dto';
import { ApiTags, ApiCreatedResponse, ApiBearerAuth } from '@nestjs/swagger';
import { IsspEntity } from './entities/issp.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@ApiTags('issps')
@Controller('issp')
export class IsspController {
  constructor(private readonly isspService: IsspService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  async create(@Body() createIsspDto: CreateIsspDto) {
    return new IsspEntity(await this.isspService.create(createIsspDto));
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity, isArray: true })
  async findAll() {
    const issps = await this.isspService.findAll();
    return issps.map((issp) => new IsspEntity(issp));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  async findOne(@Param('id') id: string) {
    return new IsspEntity(await this.isspService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  async update(@Param('id') id: string, @Body() updateIsspDto: UpdateIsspDto) {
    return new IsspEntity(await this.isspService.update(id, updateIsspDto));
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: IsspEntity })
  async remove(@Param('id') id: string) {
    return new IsspEntity(await this.isspService.remove(id));
  }
}
