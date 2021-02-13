import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SideDishDocument = SideDish & Document;

@Schema()
export class SideDish extends Document {
  @Prop()
  name: string;

  @Prop()
  price: number;

  //maincourse id
  @Prop()
  maincourse: string;
}

export const SideDishSchema = SchemaFactory.createForClass(SideDish);
