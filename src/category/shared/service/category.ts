import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../entity/Category';
import { CategoryDTO } from '../entity/categoryDTO';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private categoriesRepository: Repository<Category>,
  ) {}

  async create(category: Category): Promise<CategoryDTO> {
    const createdCategory: Category = this.categoriesRepository.create(
      category,
    );
    const { name, description } = await this.categoriesRepository.save(
      createdCategory,
    );
    return { name, description };
  }

  async findAll(): Promise<Category[]> {
    return this.categoriesRepository.find();
  }

  async findOne(id: string): Promise<Category> {
    return await this.categoriesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.categoriesRepository.delete(id);
  }
}
