import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MainCourse, MainCourseSchema } from 'src/database/models/maincourse';
import { CreateMainCourseService } from './service/create';
import { DeleteMainCourseService } from './service/delete';
import { FindMainCourseByIdService } from './service/findById';
import { FindAllMainCourseService } from './service/findAll';
import { CreateMainCourseController } from './controller/create';
import { FindMainCourseByIdController } from './controller/findById';
import { CreateMainCourseRepository } from './repositories/create';
import { FindMainCourseByIdRepository } from './repositories/findById';
import { DeleteMainCourseController } from './controller/delete';
import { FindAllMainCourseController } from './controller/findAll';
import { DeleteMainCourseRepository } from './repositories/delete';
import { FindAllMainCourseRepository } from './repositories/findAll';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MainCourse.name, schema: MainCourseSchema },
    ]),
  ],
  controllers: [
    CreateMainCourseController,
    DeleteMainCourseController,
    FindMainCourseByIdController,
    FindAllMainCourseController,
  ],
  providers: [
    CreateMainCourseService,
    DeleteMainCourseService,
    FindMainCourseByIdService,
    FindAllMainCourseService,
    CreateMainCourseRepository,
    DeleteMainCourseRepository,
    FindMainCourseByIdRepository,
    FindAllMainCourseRepository,
  ],
})
export class MainCourseModule {}
