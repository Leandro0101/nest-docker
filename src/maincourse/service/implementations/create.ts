import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

@Injectable()
export class CreateMainCourseService implements CreateMainCourseService {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async create(mainCourse: MainCourse): Promise<MainCourse> {
    const createdMainCourse = new this.mainCourseModel(mainCourse);
    return createdMainCourse.save();
  }
}
