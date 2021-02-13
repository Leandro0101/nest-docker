import { SidedishController } from './controller/sidedish';
import { Module } from '@nestjs/common';
import { SideDishService } from './service/sidedish';

@Module({
  imports: [],
  controllers: [SidedishController],
  providers: [SideDishService],
})
export class SidedishModule {}
