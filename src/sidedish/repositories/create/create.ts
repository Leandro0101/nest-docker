import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from 'src/database/models/sidedish';
import { ISideDish } from 'src/shared/protocols/sidedish';

export class CreateSideDishRepository {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
  ) {}

  async exec(sideDish: ISideDish): Promise<ISideDish> {
    const createdSideDish: SideDish = new this.sideDishModel(sideDish);
    return await createdSideDish.save();
  }
}
