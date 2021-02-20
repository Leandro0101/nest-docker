import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from '../../database/models/sidedish';
import { ISideDish } from '../../shared/protocols/sidedish';

export class FindSideDishByIdRepository {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
  ) {}

  async exec(id: string): Promise<ISideDish> {
    let foundSideDish: ISideDish = null;

    try {
      foundSideDish = await this.sideDishModel.findById(id);
    } catch (err: any) {}

    return foundSideDish;
  }
}
