import { SidedisheController } from './controller/sidedishe';
import { SideDisheService } from './service/sidedishe';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [SidedisheController],
  providers: [SideDisheService],
})
export class SidedisheModule {}
