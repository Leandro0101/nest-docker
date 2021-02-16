import { Injectable } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { CreateMainCourseRepository } from 'src/maincourse/repositories/create';

@Injectable()
export class CreateMainCourseService {
  constructor(
    private readonly createMainCourseRepository: CreateMainCourseRepository,
  ) {}

  async create(mainCourse: MainCourse): Promise<MainCourse> {
    const createdMainCourse: MainCourse = await this.createMainCourseRepository.exec(
      mainCourse,
    );

    return createdMainCourse;
  }
}
