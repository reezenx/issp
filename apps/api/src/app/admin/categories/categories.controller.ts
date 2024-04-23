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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ApiBearerAuth, ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CategoryEntity } from './entities/category.entity';
import { AbilitiesGuard } from '../../auth/guard/abilities.guard';
import { checkAbilities } from '../../auth/decorators/abilities.decorator';
import { ItemEntityDropdown } from '../../shared/models/item-dropdown.entity';

@ApiTags('admin/categories')
@Controller('admin/categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @checkAbilities({ action: 'create', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto) {
    return new CategoryEntity(
      await this.categoriesService.create(createCategoryDto)
    );
  }

  @checkAbilities({ action: 'read', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity, isArray: true })
  @Get()
  async findAll() {
    const categories = await this.categoriesService.findAll();
    return categories.map((item) => new CategoryEntity(item));
  }

  @checkAbilities({ action: 'read', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: ItemEntityDropdown, isArray: true })
  @Get('dropdown')
  async findAllDropdown() {
    const items = await this.categoriesService.findAllDropdown();
    return items.map((item) => new ItemEntityDropdown(item));
  }

  @checkAbilities({ action: 'read', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return new CategoryEntity(await this.categoriesService.findOne(id));
  }

  @checkAbilities({ action: 'read', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @Get('exists/:code')
  async isCodeExist(@Param('code') code: string) {
    const data = await this.categoriesService.isCodeExist(code);
    return data;
  }

  @checkAbilities({ action: 'update', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCategoryDto: UpdateCategoryDto
  ) {
    return new CategoryEntity(
      await this.categoriesService.update(id, updateCategoryDto)
    );
  }

  @checkAbilities({ action: 'delete', subject: 'Category' })
  @UseGuards(AbilitiesGuard)
  @ApiBearerAuth()
  @ApiCreatedResponse({ type: CategoryEntity })
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return new CategoryEntity(await this.categoriesService.remove(id));
  }
}
