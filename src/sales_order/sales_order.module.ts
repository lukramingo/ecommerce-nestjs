import { Module } from '@nestjs/common';
import { SalesOrderService } from './sales_order.service';
import { SalesOrderController } from './sales_order.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SalesOrder } from './entities/sales_order.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SalesOrder])],
  controllers: [SalesOrderController],
  providers: [SalesOrderService]
})
export class SalesOrderModule {}
