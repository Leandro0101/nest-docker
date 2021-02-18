import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';
import { IMainCourse } from 'src/shared/protocols/maincourse';

export class CreateMainCourseRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(maincourse: IMainCourse): Promise<IMainCourse> {
    const createdMainCourse = new this.mainCourseModel(maincourse);
    return await createdMainCourse.save();
  }
}
