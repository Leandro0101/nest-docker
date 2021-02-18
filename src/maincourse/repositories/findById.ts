import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';
import { IMainCourse } from 'src/shared/protocols/maincourse';

export class FindMainCourseByIdRepository {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async exec(id: string): Promise<IMainCourse> {
    let foundMainCourse: IMainCourse;
    try {
      foundMainCourse = await this.mainCourseModel.findById(id);
    } catch (err) {}

    return foundMainCourse;
  }
}
