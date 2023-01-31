import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SalesOrderItemService } from './sales_order_item.service';
import { CreateSalesOrderItemDto } from './dto/create-sales_order_item.dto';
import { UpdateSalesOrderItemDto } from './dto/update-sales_order_item.dto';

@Controller('sales-order-item')
export class SalesOrderItemController {
  constructor(private readonly salesOrderItemService: SalesOrderItemService) {}

  @Post()
  create(@Body() createSalesOrderItemDto: CreateSalesOrderItemDto) {
    return this.salesOrderItemService.create(createSalesOrderItemDto);
  }

  @Get()
  findAll() {
    return this.salesOrderItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.salesOrderItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSalesOrderItemDto: UpdateSalesOrderItemDto) {
    return this.salesOrderItemService.update(+id, updateSalesOrderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.salesOrderItemService.remove(+id);
  }
}
