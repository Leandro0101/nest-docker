import { NotFoundException } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { DeleteMainCourseRepository } from '../../repositories/delete';
import { FindMainCourseByIdRepository } from '../../repositories/findById';
import { IMainCourse } from 'src/shared/protocols/maincourse';

@Injectable()
export class DeleteMainCourseService {
  constructor(
    private readonly deleteMainCourseRepository: DeleteMainCourseRepository,
    private readonly findMainCourseByIdRepository: FindMainCourseByIdRepository,
  ) {}

  async delete(id: string): Promise<IMainCourse> {
    const mainCourse: IMainCourse = await this.findMainCourseByIdRepository.exec(
      id,
    );

    if (!mainCourse) {
      throw new NotFoundException('Resource not found');
    }
    await this.deleteMainCourseRepository.exec(id);

    return mainCourse;
  }
}
