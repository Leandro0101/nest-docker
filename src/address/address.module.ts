import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Address, AddressSchema } from 'src/database/models/address';
import { CreateAddressController } from './controller/create';
import { FindAllAddressController } from './controller/findAll';
import { CreateAddressRepository } from './repositories/create';
import { FindAllAddressRepository } from './repositories/findAll';
import { CreateAddressService } from './service/create';
import { FindAllAddressService } from './service/findAll';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Address.name, schema: AddressSchema }]),
  ],
  controllers: [CreateAddressController, FindAllAddressController],
  providers: [
    FindAllAddressService,
    FindAllAddressRepository,
    CreateAddressService,
    CreateAddressRepository,
  ],
})
export class AddressModule {}
