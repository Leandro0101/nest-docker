import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { IMainCourse } from 'src/shared/protocols/maincourse';

export type MainCourseDocument = MainCourse & Document;

@Schema()
export class MainCourse extends Document implements IMainCourse {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const MainCourseSchema = SchemaFactory.createForClass(MainCourse);
