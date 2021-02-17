import { Injectable } from '@nestjs/common';
import { Address } from 'src/database/models/address';
import { FindAllAddressRepository } from '../repositories/findAll';

@Injectable()
export class FindAllAddressService {
  constructor(
    private readonly findAllAddressRepository: FindAllAddressRepository,
  ) {}

  async findAll(): Promise<Address[]> {
    const founds = await this.findAllAddressRepository.exec();

    return founds;
  }
}
