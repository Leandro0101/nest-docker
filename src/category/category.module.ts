import { CategoryController } from './controller/category';
import { CategoryService } from './shared/service/category';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './shared/entity/Category';

@Module({
  controllers: [CategoryController],
  providers: [CategoryService],
  imports: [TypeOrmModule.forFeature([Category])],
})
export class CategoryModule {}
