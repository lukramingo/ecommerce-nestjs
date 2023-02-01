import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { SalesOrderItem } from "../../sales_order_item/entities/sales_order_item.entity";
import { User } from "../../users/entities/user.entity";

@Entity()
export class SalesOrder {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToOne((type)=> User, (user) => user.sales_order)
    @JoinColumn({name: 'user_id'})
    user: User;

    @Column({default: Math.floor(Math.random()*99999)})
    order_no: number;

    @Column({default: 'New order'})
    order_status: string;

    @OneToMany((type) => SalesOrderItem, sales_order_item => sales_order_item.sales_order)
    sales_order_item: SalesOrderItem[];
}
