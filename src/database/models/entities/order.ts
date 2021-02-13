import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { Item } from '../protocols/item';

export type OrderDocument = Order & Document;

@Schema()
export class Order extends Document {
  @Prop()
  client: string;

  @Prop()
  items: Item[];

  @Prop()
  total: number;

  setTotal(): void {
    let total = 0;

    for (const i of this.items) {
      total += i.maincourse.price;
      for (const s of i.sidedishes) {
        total += s.price;
      }
    }

    this.total = total;
  }
}

export const OrderSchema = SchemaFactory.createForClass(Order);
