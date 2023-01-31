import { Column, Entity, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from "typeorm";
import { SalesOrder } from "../../sales_order/entities/sales_order.entity";
import { Product } from "../../product/entities/product.entity";

@Entity()
export class SalesOrderItem {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type) => SalesOrder, sales_order => sales_order.sales_order_item)
    sales_order: SalesOrder

    @OneToOne(type => Product, product => product.sales_order_item)
    @JoinColumn({name: 'product_id'})
    product: Product;

    @Column()
    quantity: number;

    @Column()
    amount: number;
}
