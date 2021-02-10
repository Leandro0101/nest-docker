import { CategoryService } from './shared/service/category';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './shared/entity/Category';

@Module({
  controllers: [],
  providers: [CategoryService],
  exports: [],
  imports: [TypeOrmModule.forFeature([Category])],
})
export class CategoryModule {}
