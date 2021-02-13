import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SideDish } from 'src/database/models/sidedish';
import { MainCourseService } from 'src/maincourse/service/maincourse';

@Injectable()
export class SideDishService {
  constructor(private maincourse: MainCourseService) {}

  async create(sidedish: SideDish, maincourseId: string): Promise<SideDish> {
    const mainCourse = await this.maincourse.findById(maincourseId);

    if (!mainCourse) {
      return null;
    }

    const createdSideDish = new SideDish(sidedish);
    createdSideDish.maincourse = maincourseId;

    return await createdSideDish.save();
  }
}
