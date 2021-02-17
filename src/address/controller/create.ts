import { Body, Controller, Post } from '@nestjs/common';
import { Address } from 'src/database/models/address';
import { CreateAddressService } from '../service/create';

@Controller('adresses')
export class CreateAddressController {
  constructor(private readonly createAddressService: CreateAddressService) {}

  @Post()
  async create(@Body() address: Address): Promise<Address> {
    const createdAddress: Address = await this.createAddressService.create(
      address,
    );
    return createdAddress;
  }
}
