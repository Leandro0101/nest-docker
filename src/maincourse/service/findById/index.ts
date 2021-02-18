import { Injectable } from '@nestjs/common';
import { IMainCourse } from '../../../shared/protocols/maincourse';
import { FindMainCourseByIdRepository } from '../../repositories/findById';

@Injectable()
export class FindMainCourseByIdService {
  constructor(
    private readonly findMainCourseByIdRepository: FindMainCourseByIdRepository,
  ) {}

  async findById(id: string): Promise<IMainCourse> {
    const mainCourse: IMainCourse = await this.findMainCourseByIdRepository.exec(
      id,
    );
    return mainCourse;
  }
}
