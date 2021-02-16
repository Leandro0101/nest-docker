import { Controller, Delete, Param } from '@nestjs/common';
import { DeleteMainCourseService } from '../service/delete';

@Controller('maindish')
export class DeleteMainCourseController {
  constructor(private deleteMainCourseService: DeleteMainCourseService) {}

  @Delete(':mainCourseId')
  async Delete(@Param('id') mainCourseId: string): Promise<void> {
    await this.deleteMainCourseService.delete(mainCourseId);
  }
}
