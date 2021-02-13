import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Address } from 'src/database/models/address';

@Injectable()
export class AddressService {
  constructor(@InjectModel('Address') private addressModel: Address) {}
}
