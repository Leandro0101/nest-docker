import { Controller, Delete, Param } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { FindMainCourseByIdService } from '../service/findById';

@Controller('maindish')
export class FindMainCourseByIdController {
  constructor(private findMainCourseByIdService: FindMainCourseByIdService) {}

  @Delete(':mainCourseId')
  async Delete(@Param('id') mainCourseId: string): Promise<MainCourse> {
    const foundedMainCourse: MainCourse = await this.findMainCourseByIdService.findById(
      mainCourseId,
    );

    return foundedMainCourse;
  }
}
