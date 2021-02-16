import { Controller, Get } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { FindAllMainCourseService } from '../service/findAll';

@Controller('maindish')
export class FindAllMainCourseController {
  constructor(private findAllMainCourseService: FindAllMainCourseService) {}

  @Get()
  async Delete(): Promise<MainCourse[]> {
    const foundedsMainCourses: MainCourse[] = await this.findAllMainCourseService.findAll();
    return foundedsMainCourses;
  }
}
