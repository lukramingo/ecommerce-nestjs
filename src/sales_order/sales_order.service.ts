import { Injectable } from '@nestjs/common';
import { CreateSalesOrderDto } from './dto/create-sales_order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales_order.dto';

@Injectable()
export class SalesOrderService {
  create(createSalesOrderDto: CreateSalesOrderDto) {
    return 'This action adds a new salesOrder';
  }

  findAll() {
    return `This action returns all salesOrder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} salesOrder`;
  }

  update(id: number, updateSalesOrderDto: UpdateSalesOrderDto) {
    return `This action updates a #${id} salesOrder`;
  }

  remove(id: number) {
    return `This action removes a #${id} salesOrder`;
  }
}
