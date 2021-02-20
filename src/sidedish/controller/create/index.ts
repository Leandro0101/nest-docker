import { Body, Controller, Post } from '@nestjs/common';
import { ISideDish } from 'src/shared/protocols/sidedish';
import { CreateSideDishService } from '../../service/create';

@Controller('sidedishes')
export class CreateSidedishController {
  constructor(private createSideDishService: CreateSideDishService) {}

  @Post()
  async create(@Body() sideDish: ISideDish): Promise<ISideDish> {
    const createdSidhDish: ISideDish = await this.createSideDishService.create(
      sideDish,
    );
    return createdSidhDish;
  }
}
