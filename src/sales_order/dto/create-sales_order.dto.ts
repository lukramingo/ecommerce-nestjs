import { IsString, IsNumber } from "class-validator";

export class CreateSalesOrderDto {

    @IsString()
    order_status: string;
}
