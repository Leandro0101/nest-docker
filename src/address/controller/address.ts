import { Body, Controller, Get, Post } from '@nestjs/common';
import { Address } from 'src/database/models/address';
import { AddressService } from '../service/address';

@Controller('adresses')
export class AddressController {
  constructor(private addressService: AddressService) {}

  @Post()
  async create(@Body() address: Address): Promise<Address> {
    return await this.addressService.create(address);
  }

  @Get()
  async findAll(): Promise<Address[]> {
    return await this.addressService.findAll();
  }
}
