import { Body, Controller, Get, Post } from '@nestjs/common';
import { Category } from 'src/database/models/category';
import { CategoryService } from '../service/category';

@Controller('categories')
export class CategoryController {
  constructor(private categoriesService: CategoryService) {}

  @Post()
  async create(@Body() category: Category): Promise<Category> {
    return await this.categoriesService.create(category);
  }

  @Get()
  async findAll(): Promise<Category[]> {
    return await this.categoriesService.findAll();
  }
}
