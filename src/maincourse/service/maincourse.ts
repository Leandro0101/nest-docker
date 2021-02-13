import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MainCourse } from 'src/database/models/maincourse';

@Injectable()
export class MainCourseService {
  constructor(
    @InjectModel('MainCourse')
    private readonly mainCourseModel: Model<MainCourse>,
  ) {}

  async create(mainCourse: MainCourse): Promise<MainCourse> {
    const createdMainCourse = new this.mainCourseModel(mainCourse);
    return createdMainCourse.save();
  }

  async findAll(): Promise<MainCourse[]> {
    return this.mainCourseModel.find().exec();
  }

  async delete(id: string): Promise<void> {
    return await this.mainCourseModel.deleteOne({ _id: id }).exec();
  }

  async findById(id: string): Promise<MainCourse> {
    return await this.mainCourseModel.findById(id).exec();
  }
}
