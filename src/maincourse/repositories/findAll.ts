import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

export class DeleteMainCourseRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(): Promise<MainCourse[]> {
    return this.mainCourseModel.find().exec();
  }
}
