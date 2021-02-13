import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AddressDocument = Address & Document;

@Schema()
export class Address extends Document {
  @Prop()
  city: string;

  @Prop()
  neighborhood: string;

  @Prop()
  street: string;

  @Prop()
  complement: string;
}

export const AddressSchema = SchemaFactory.createForClass(Address);
