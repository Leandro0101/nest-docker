import { Injectable } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { FindAllMainCourseRepository } from 'src/maincourse/repositories/findAll';
import { IMainCourse } from 'src/shared/protocols/maincourse';

@Injectable()
export class FindAllMainCourseService {
  constructor(
    private readonly findAllMainCourseRepository: FindAllMainCourseRepository,
  ) {}

  async findAll(): Promise<IMainCourse[]> {
    return this.findAllMainCourseRepository.exec();
  }
}
