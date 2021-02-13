import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { SideDishService } from '../service/sidedish';

@Controller('sidedishes')
export class SidedishController {
  constructor(private sideDishService: SideDishService) {}

  @Post()
  async create(@Body() sideDish: SideDish): Promise<SideDish> {
    return await this.sideDishService.create(sideDish);
  }

  @Get()
  async findAll(): Promise<SideDish[]> {
    return await this.sideDishService.findAll();
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return await this.sideDishService.delete(id);
  }
}
