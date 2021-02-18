import { Module } from '@nestjs/common';
import { MainCourseModule } from 'src/maincourse/maincourse.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SideDish, SideDishSchema } from 'src/database/models/sidedish';
import { CreateSidedishController } from './controller/create';
import { FindAllSidedishController } from './controller/findAll';
import { DeleteSidedishController } from './controller/delete';
import { CreateSideDishService } from './service/create/create';
import { FindAllSideDishService } from './service/findAll/findAll';
import { DeleteSideDishService } from './service/delete/delete';
import { CreateSideDishRepository } from './repositories/create';
import { FindAllSideDishRepository } from './repositories/findAll';
import { DeleteSideDishRepository } from './repositories/delete';
import { FindSideDishByIdRepository } from './repositories/findById';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: SideDish.name, schema: SideDishSchema },
    ]),
    MainCourseModule,
  ],
  controllers: [
    CreateSidedishController,
    FindAllSidedishController,
    DeleteSidedishController,
  ],
  providers: [
    CreateSideDishService,
    FindAllSideDishService,
    DeleteSideDishService,
    CreateSideDishRepository,
    FindAllSideDishRepository,
    FindSideDishByIdRepository,
    DeleteSideDishRepository,
  ],
})
export class SidedishModule {}
