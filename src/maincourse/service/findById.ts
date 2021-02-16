import { Injectable } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { FindMainCourseByIdRepository } from '../repositories/findById';

@Injectable()
export class FindMainCourseByIdService {
  constructor(
    private readonly findMainCourseByIdRepository: FindMainCourseByIdRepository,
  ) {}

  async findById(id: string): Promise<MainCourse> {
    const mainCourse: MainCourse = await this.findMainCourseByIdRepository.exec(
      id,
    );
    return mainCourse;
  }
}
