import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateSalesOrderDto } from './dto/update-sales_order.dto';
import { SalesOrder } from './entities/sales_order.entity';

@Injectable()
export class SalesOrderService {
  constructor(@InjectRepository(SalesOrder) private orderRepository: Repository<SalesOrder>){}

  create(order_status: string) {
    const order = this.orderRepository.create({ order_status});
    return this.orderRepository.save(order);
  }

  findAll() {
    return this.orderRepository.find();
  }

  async findByUserOrder(user_id: any){
    // return this.orderRepository.find(user_id)
    return await this.orderRepository
    .createQueryBuilder("sales_order")
    .leftJoinAndSelect("sale_order.user", "user")
    .getMany()
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
