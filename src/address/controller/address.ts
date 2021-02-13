import { Body, Controller, Post } from '@nestjs/common';
import { Address } from 'src/database/models/address';
import { AddressService } from '../service/address';

@Controller()
export class AddressController {
  constructor(private addressService: AddressService) {}
}
