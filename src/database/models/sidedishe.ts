import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type SideDisheDocument = SideDishe & Document;

@Schema()
export class SideDishe extends Document {
  @Prop()
  name: string;

  @Prop()
  price: number;

  //maincourse id
  @Prop()
  maincourse: string;
}

export const SideDisheSchema = SchemaFactory.createForClass(SideDishe);
