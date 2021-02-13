import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from 'src/database/models/sidedish';

@Injectable()
export class SideDishService {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
  ) {}

  async create(sidedish: SideDish): Promise<SideDish> {
    const createdSideDish: SideDish = new this.sideDishModel(sidedish);

    return await createdSideDish.save();
  }
}
