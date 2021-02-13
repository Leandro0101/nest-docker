import { SidedishController } from './controller/sidedish';
import { Module } from '@nestjs/common';
import { SideDishService } from './service/sidedish';
import { MainCourseModule } from 'src/maincourse/maincourse.module';

@Module({
  imports: [MainCourseModule],
  controllers: [SidedishController],
  providers: [SideDishService],
})
export class SidedishModule {}
