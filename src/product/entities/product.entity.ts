import { SalesOrderItem } from "../../sales_order_item/entities/sales_order_item.entity";
import { Column, Entity, PrimaryGeneratedColumn , CreateDateColumn, UpdateDateColumn, OneToOne } from "typeorm";

@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    product_name: string;

    @Column()
    price: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ 
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", 
        onUpdate: "CURRENT_TIMESTAMP(6)" 
    })
    updated_at: Date;

    @OneToOne(type => SalesOrderItem, sales_order_item => sales_order_item.product)
    sales_order_item: SalesOrderItem;
}
