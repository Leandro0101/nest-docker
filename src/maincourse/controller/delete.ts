import { Controller, Delete, Param } from '@nestjs/common';
import { IMainCourse } from 'src/shared/protocols/maincourse';
import { DeleteMainCourseService } from '../service/delete';

@Controller('maindish')
export class DeleteMainCourseController {
  constructor(
    private readonly deleteMainCourseService: DeleteMainCourseService,
  ) {}

  @Delete(':id')
  async delete(@Param('id') mainCourseId: string): Promise<IMainCourse> {
    return await this.deleteMainCourseService.delete(mainCourseId);
  }
}
