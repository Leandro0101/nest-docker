import { OrderController } from './controller/order.controller';
import { OrderService } from './service/order';
import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [OrderController],
  providers: [OrderService],
})
export class OrderModule {}
