import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Address } from 'src/database/models/address';

@Injectable()
export class AddressService {
  constructor(@InjectModel('Address') private addressModel: Model<Address>) {}

  async create(address: Address): Promise<Address> {
    const createdAddress = new this.addressModel(address);

    return await createdAddress.save();
  }

  async findAll(): Promise<Address[]> {
    return await this.addressModel.find().exec();
  }
}
