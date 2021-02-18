import { Injectable } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { CreateMainCourseRepository } from '../../repositories/create';
import { IMainCourse } from 'src/shared/protocols/maincourse';

@Injectable()
export class CreateMainCourseService {
  constructor(
    private readonly createMainCourseRepository: CreateMainCourseRepository,
  ) {}

  async create(mainCourse: IMainCourse): Promise<IMainCourse> {
    const createdMainCourse: IMainCourse = await this.createMainCourseRepository.exec(
      mainCourse,
    );

    return createdMainCourse;
  }
}
