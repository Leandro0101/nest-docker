import { Body, Controller, Post } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { CreateSideDishService } from '../service/create';

@Controller('sidedishes')
export class CreateSidedishController {
  constructor(private createSideDishService: CreateSideDishService) {}

  @Post()
  async create(@Body() sideDish: SideDish): Promise<SideDish> {
    return await this.createSideDishService.create(sideDish);
  }
}
