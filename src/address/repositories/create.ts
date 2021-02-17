import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from 'src/database/models/address';

export class CreateAddressRepository {
  constructor(
    @InjectModel('SideDish')
    private readonly addressModel: Model<Address>,
  ) {}

  async exec(address: Address): Promise<Address> {
    const createdAddress = new this.addressModel(address);
    return await createdAddress.save();
  }
}
