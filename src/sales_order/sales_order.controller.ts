import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SalesOrderService } from './sales_order.service';
import { CreateSalesOrderDto } from './dto/create-sales_order.dto';
import { UpdateSalesOrderDto } from './dto/update-sales_order.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('salesorder')
export class SalesOrderController {
  constructor(private readonly salesOrderService: SalesOrderService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createSalesOrderDto: CreateSalesOrderDto) {
    return this.salesOrderService.create(createSalesOrderDto.order_status);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.salesOrderService.findAll();
  }

  @Get(':user_id')
  findUser(@Param('user_id') user_id: string){
    return this.salesOrderService.findByUserOrder(+user_id);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesOrderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesOrderDto: UpdateSalesOrderDto) {
    return this.salesOrderService.update(+id, updateSalesOrderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesOrderService.remove(+id);
  }
}
