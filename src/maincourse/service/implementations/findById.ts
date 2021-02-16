import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

@Injectable()
export class FindMainCourseByIdService {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async findById(id: string): Promise<MainCourse> {
    return await this.mainCourseModel.findById(id).exec();
  }
}
