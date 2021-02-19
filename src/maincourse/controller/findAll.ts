import { Controller, Get } from '@nestjs/common';
import { IMainCourse } from 'src/shared/protocols/maincourse';
import { FindAllMainCourseService } from '../service/findAll';

@Controller('maindish')
export class FindAllMainCourseController {
  constructor(private findAllMainCourseService: FindAllMainCourseService) {}

  @Get()
  async Delete(): Promise<IMainCourse[]> {
    const foundsMainCourses: IMainCourse[] = await this.findAllMainCourseService.findAll();
    return foundsMainCourses;
  }
}
