import { Injectable } from '@nestjs/common';
import { Address } from 'src/database/models/address';
import { CreateAddressRepository } from '../repositories/create';

@Injectable()
export class CreateAddressService {
  constructor(
    private readonly createAddressRepository: CreateAddressRepository,
  ) {}

  async create(address: Address): Promise<Address> {
    const createdAddress = await this.createAddressRepository.exec(address);

    return createdAddress;
  }
}
