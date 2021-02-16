import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';
import { IDeleteMainCourse } from '../delete';

@Injectable()
export class MainCourseService implements IDeleteMainCourse {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async delete(id: string): Promise<void> {
    return await this.mainCourseModel.deleteOne({ _id: id }).exec();
  }
}
