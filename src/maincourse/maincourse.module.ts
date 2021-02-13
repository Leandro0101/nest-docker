import { MainCourseController } from './controller/maincourse';
import { MainCourseService } from './service/maincourse';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MainCourse, MainCourseSchema } from 'src/database/models/entities/maincourse';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MainCourse.name, schema: MainCourseSchema },
    ]),
  ],
  controllers: [MainCourseController],
  providers: [MainCourseService],
  exports: [MainCourseService],
})
export class MainCourseModule {}
