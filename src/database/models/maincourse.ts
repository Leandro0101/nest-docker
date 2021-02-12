import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MainCourseDocument = MainCourse & Document;

@Schema()
export class MainCourse extends Document {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;
}

export const MainCourseSchema = SchemaFactory.createForClass(MainCourse);
