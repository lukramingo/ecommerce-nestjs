import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './users/entities/user.entity';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
import { SalesOrderModule } from './sales_order/sales_order.module';
import { SalesOrderItemModule } from './sales_order_item/sales_order_item.module';
import { Product } from './product/entities/product.entity';
import { SalesOrder } from './sales_order/entities/sales_order.entity';
import { SalesOrderItem } from './sales_order_item/entities/sales_order_item.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Nature@2022',
      database: 'ecommerce_db',
      entities: [User, Product, SalesOrder, SalesOrderItem],
      synchronize: true,
    }), 
    UsersModule, AuthModule, ProductModule, SalesOrderModule, SalesOrderItemModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
