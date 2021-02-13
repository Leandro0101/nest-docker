import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SideDishe } from 'src/database/models/sidedishe';
import { MainCourseService } from 'src/maincourse/service/maincourse';

@Injectable()
export class SideDisheService {
  constructor(
    @InjectModel('SideDishe') private sideDisheModel: SideDishe,
    private maincourse: MainCourseService,
  ) {}

  async create(sidedishe: SideDishe, maincourseId: string): Promise<SideDishe> {
    const mainCourse = await this.maincourse.findById(maincourseId);

    if (!mainCourse) {
      return null;
    }

    const createdSideDishe = new SideDishe(sidedishe);
    createdSideDishe.maincourse = maincourseId;

    return await createdSideDishe.save();
  }
}
