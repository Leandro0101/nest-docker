import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

export class FindAllMainCourseRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(): Promise<MainCourse[]> {
    const foundsMainCourses: MainCourse[] = await this.mainCourseModel
      .find()
      .exec();
    return foundsMainCourses;
  }
}
