import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { SideDish } from 'src/database/models/sidedish';

export class DeleteSideDishRepository {
  constructor(
    @InjectModel('SideDish')
    private readonly sideDishModel: Model<SideDish>,
  ) {}

  async exec(id: string): Promise<void> {
    await this.sideDishModel.deleteOne({ _id: id }).exec();
  }
}
