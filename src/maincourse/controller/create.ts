import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { MainCourseService } from '../service/implementations/maincourse';

@Controller('maindish')
export class MainCourseController {
  constructor(private mainCourseService: MainCourseService) {}

  @Post()
  async create(@Body() mainCourse: MainCourse): Promise<MainCourse> {
    return await this.mainCourseService.create(mainCourse);
  }

  @Get()
  async findAll(): Promise<MainCourse[]> {
    return await this.mainCourseService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.mainCourseService.delete(id);
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<MainCourse> {
    return this.mainCourseService.findById(id);
  }
}