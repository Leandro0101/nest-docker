import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { ISideDish } from 'src/shared/protocols/sidedish';

export type SideDishDocument = SideDish & Document;

@Schema()
export class SideDish extends Document implements ISideDish {
  @Prop()
  name: string;

  @Prop()
  price: number;
}

export const SideDishSchema = SchemaFactory.createForClass(SideDish);
