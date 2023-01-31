import { Injectable } from '@nestjs/common';
import { CreateSalesOrderItemDto } from './dto/create-sales_order_item.dto';
import { UpdateSalesOrderItemDto } from './dto/update-sales_order_item.dto';

@Injectable()
export class SalesOrderItemService {
  create(createSalesOrderItemDto: CreateSalesOrderItemDto) {
    return 'This action adds a new salesOrderItem';
  }

  findAll() {
    return `This action returns all salesOrderItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesOrderItem`;
  }

  update(id: number, updateSalesOrderItemDto: UpdateSalesOrderItemDto) {
    return `This action updates a #${id} salesOrderItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesOrderItem`;
  }
}
