import { Controller, Get } from '@nestjs/common';
import { SideDish } from 'src/database/models/sidedish';
import { FindAllSideDishService } from '../service/findAll/findAll';

@Controller('sidedishes')
export class FindAllSidedishController {
  constructor(private findAllCreateSideDishService: FindAllSideDishService) {}

  @Get()
  async findAll(): Promise<SideDish[]> {
    const foundedsSideDishes: SideDish[] = await this.findAllCreateSideDishService.findAll();
    return foundedsSideDishes;
  }
}
