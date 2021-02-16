import { Body, Controller, Post } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { CreateMainCourseService } from '../service/create';

@Controller('maindish')
export class CreateMainCourseController {
  constructor(private createMainCourseService: CreateMainCourseService) {}

  @Post()
  async create(@Body() mainCourse: MainCourse): Promise<MainCourse> {
    const createdMainCourse: MainCourse = await this.createMainCourseService.create(
      mainCourse,
    );
    return createdMainCourse;
  }
}
