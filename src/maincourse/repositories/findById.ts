import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

export class FindMainCourseByIdRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(id: string): Promise<MainCourse> {
    const foundMainCourse: MainCourse = await this.mainCourseModel.findById(id);

    return foundMainCourse;
  }
}
