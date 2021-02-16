import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

export class CreateMainCourseRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(maincourse: MainCourse): Promise<MainCourse> {
    const createdMainCourse = new this.mainCourseModel(maincourse);
    return createdMainCourse.save();
  }
}
