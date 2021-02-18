import { Body, Controller, Post } from '@nestjs/common';
import { ISideDish } from 'src/shared/protocols/sidedish';
import { CreateSideDishService } from '../service/create';

@Controller('sidedishes')
export class CreateSidedishController {
  constructor(private createSideDishService: CreateSideDishService) {}

  @Post()
  async create(@Body() sideDish: ISideDish): Promise<ISideDish> {
    return await this.createSideDishService.create(sideDish);
  }
}
