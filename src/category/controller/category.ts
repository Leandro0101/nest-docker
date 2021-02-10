import { Body, Controller, Post } from '@nestjs/common';
import { Category } from '../shared/entity/Category';
import { CategoryDTO } from '../shared/entity/categoryDTO';
import { CategoryService } from '../shared/service/category';

@Controller('categories')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Post()
  async create(@Body() category: Category): Promise<CategoryDTO> {
    return await this.categoriesService.create(category);
  }
}
