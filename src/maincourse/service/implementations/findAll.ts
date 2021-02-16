import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

@Injectable()
export class FindAllMainCourseService {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async findAll(): Promise<MainCourse[]> {
    return this.mainCourseModel.find().exec();
  }
}
