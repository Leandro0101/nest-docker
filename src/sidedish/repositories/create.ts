import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from 'src/database/models/sidedish';

export class CreateSideDishRepository {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
  ) {}

  async exec(sideDish: SideDish): Promise<SideDish> {
    const createdSideDish = new this.sideDishModel(sideDish);
    return createdSideDish.save();
  }
}
