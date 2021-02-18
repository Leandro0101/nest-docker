import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';
import { IMainCourse } from 'src/shared/protocols/maincourse';

export class FindAllMainCourseRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(): Promise<IMainCourse[]> {
    const foundsMainCourses: IMainCourse[] = await this.mainCourseModel
      .find()
      .exec();
    return foundsMainCourses;
  }
}
