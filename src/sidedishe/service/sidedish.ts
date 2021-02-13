import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from 'src/database/models/sidedish';
import { MainCourseService } from 'src/maincourse/service/maincourse';

@Injectable()
export class SideDishService {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
    private maincourseService: MainCourseService,
  ) {}

  async create(sidedish: SideDish, maincourseId: string): Promise<SideDish> {
    const mainCourse = await this.maincourseService.findById(maincourseId);

    if (!mainCourse) {
      return null;
    }

    const createdSideDish: SideDish = new this.sideDishModel(sidedish);
    createdSideDish.maincourse = maincourseId;

    return await createdSideDish.save();
  }
}
