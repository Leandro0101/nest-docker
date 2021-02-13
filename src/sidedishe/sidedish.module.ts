import { SidedishController } from './controller/sidedish';
import { Module } from '@nestjs/common';
import { SideDishService } from './service/sidedish';
import { MainCourseModule } from 'src/maincourse/maincourse.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SideDish, SideDishSchema } from 'src/database/models/entities/sidedish';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SideDish.name, schema: SideDishSchema },
    ]),
    MainCourseModule,
  ],
  controllers: [SidedishController],
  providers: [SideDishService],
})
export class SidedishModule {}
