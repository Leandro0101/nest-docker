import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from 'src/database/models/address';

export class FindAllAddressRepository {
  constructor(
    @InjectModel('Address')
    private readonly addressModel: Model<Address>,
  ) {}

  async exec(): Promise<Address[]> {
    const foundedsAdresses: Address[] = await this.addressModel.find().exec();

    return foundedsAdresses;
  }
}
