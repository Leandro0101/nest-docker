import { Injectable } from '@nestjs/common';
import { FindAllMainCourseRepository } from '../../repositories/findAll';
import { IMainCourse } from '../../../shared/protocols/maincourse';

@Injectable()
export class FindAllMainCourseService {
  constructor(
    private readonly findAllMainCourseRepository: FindAllMainCourseRepository,
  ) {}

  async findAll(): Promise<IMainCourse[]> {
    return this.findAllMainCourseRepository.exec();
  }
}
