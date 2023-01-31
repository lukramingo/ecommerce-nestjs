import { Module } from '@nestjs/common';
import { SalesOrderItemService } from './sales_order_item.service';
import { SalesOrderItemController } from './sales_order_item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrderItem } from './entities/sales_order_item.entity';

@Module({
  imports:[TypeOrmModule.forFeature([SalesOrderItem])],
  controllers: [SalesOrderItemController],
  providers: [SalesOrderItemService]
})
export class SalesOrderItemModule {}
