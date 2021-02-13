import { MainCourseModule } from './maincourse/maincourse.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SidedishModule } from './sidedishe/sidedish.module';

@Module({
  imports: [
    SidedishModule,
    MainCourseModule,
    MongooseModule.forRoot('mongodb://database/dockernest', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
