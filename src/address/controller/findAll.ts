import { Controller, Get } from '@nestjs/common';
import { Address } from 'src/database/models/address';
import { FindAllAddressService } from '../service/findAll';

@Controller('adresses')
export class FindAllAddressController {
  constructor(private readonly findAllAddressService: FindAllAddressService) {}

  @Get()
  async findAll(): Promise<Address[]> {
    const foundsAdresses: Address[] = await this.findAllAddressService.findAll();

    return foundsAdresses;
  }
}
