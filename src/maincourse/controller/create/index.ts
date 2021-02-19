import { Body, Controller, Post } from '@nestjs/common';
import { IMainCourse } from '../../../shared/protocols/maincourse';
import { CreateMainCourseService } from '../../service/create';

@Controller('maindish')
export class CreateMainCourseController {
  constructor(private createMainCourseService: CreateMainCourseService) {}

  @Post()
  async create(@Body() mainCourse: IMainCourse): Promise<IMainCourse> {
    const createdMainCourse: IMainCourse = await this.createMainCourseService.create(
      mainCourse,
    );
    return createdMainCourse;
  }
}
