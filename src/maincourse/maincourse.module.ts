import { MainCourseController } from './controller/maincourse';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MainCourse, MainCourseSchema } from 'src/database/models/maincourse';
import { CreateMainCourseService } from './service/implementations/create';
import { DeleteMainCourseService } from './service/implementations/delete';
import { FindMainCourseByIdService } from './service/implementations/findById';
import { FindAllMainCourseService } from './service/implementations/findAll';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MainCourse.name, schema: MainCourseSchema },
    ]),
  ],
  controllers: [MainCourseController],
  providers: [
    CreateMainCourseService,
    DeleteMainCourseService,
    FindMainCourseByIdService,
    FindAllMainCourseService,
  ],
})
export class MainCourseModule {}
