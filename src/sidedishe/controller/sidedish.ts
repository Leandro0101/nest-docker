import { Body, Controller, Param, Post } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { SideDishService } from '../service/sidedish';

@Controller('sidedishes')
export class SidedishController {
  constructor(private sideDishService: SideDishService) {}

  @Post(':maincourseId')
  async create(
    @Body() sideDish: SideDish,
    @Param('maincourseId') maincourseId: string,
  ): Promise<SideDish> {
    return await this.sideDishService.create(sideDish, maincourseId);
  }
}
