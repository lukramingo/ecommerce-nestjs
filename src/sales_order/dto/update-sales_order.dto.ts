import { PartialType } from '@nestjs/mapped-types';
import { CreateSalesOrderDto } from './create-sales_order.dto';

export class UpdateSalesOrderDto extends PartialType(CreateSalesOrderDto) {}
