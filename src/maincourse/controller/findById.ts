import { Controller, Delete, Param } from '@nestjs/common';
import { IMainCourse } from 'src/shared/protocols/maincourse';
import { FindMainCourseByIdService } from '../service/findById';

@Controller('maindish')
export class FindMainCourseByIdController {
  constructor(private findMainCourseByIdService: FindMainCourseByIdService) {}

  @Delete(':mainCourseId')
  async Delete(@Param('id') mainCourseId: string): Promise<IMainCourse> {
    const foundMainCourse: IMainCourse = await this.findMainCourseByIdService.findById(
      mainCourseId,
    );

    return foundMainCourse;
  }
}
