import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';

@ApiTags('admin/categories')
@Controller('admin/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

   @Post()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
   @ApiCreatedResponse({ type: CategoryEntity })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return new CategoryEntity(await this.categoriesService.create(createCategoryDto));
  }

    @Get()
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity, isArray: true })
  async findAll() {
    const categories = await this.categoriesService.findAll();
    return categories.map((item) => new CategoryEntity(item))
  }

  @Get(':id')
    @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  async findOne(@Param('id') id: string) {
    return new CategoryEntity( await this.categoriesService.findOne(id));
  }

  @Put(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return new CategoryEntity(await this.categoriesService.update(id, updateCategoryDto));
  }

  @Delete(':id')
  // @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  async remove(@Param('id') id: string) {
    return new CategoryEntity( await this.categoriesService.remove(id));
  }
}
