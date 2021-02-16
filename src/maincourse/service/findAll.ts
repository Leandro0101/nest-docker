import { Injectable } from '@nestjs/common';
import { MainCourse } from 'src/database/models/maincourse';
import { FindAllMainCourseRepository } from 'src/maincourse/repositories/findAll';

@Injectable()
export class FindAllMainCourseService {
  constructor(
    private readonly findAllMainCourseRepository: FindAllMainCourseRepository,
  ) {}

  async findAll(): Promise<MainCourse[]> {
    return this.findAllMainCourseRepository.exec();
  }
}
