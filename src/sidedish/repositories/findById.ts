import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from 'src/database/models/sidedish';

export class FindSideDishByIdRepository {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
  ) {}

  async exec(id: string): Promise<SideDish> {
    return this.sideDishModel.findById(id);
  }
}
