import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, JoinColumn } from "typeorm";
import { SalesOrder } from "../../sales_order/entities/sales_order.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number; 

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column({default: 1})
    status: number;

    @CreateDateColumn({ type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)" })
    created_at: Date;

    @UpdateDateColumn({ 
        type: "timestamp", default: () => "CURRENT_TIMESTAMP(6)", 
        onUpdate: "CURRENT_TIMESTAMP(6)" 
    })
    updated_at: Date;

    @OneToMany(type => SalesOrder, sale_order => sale_order.user)
    @JoinColumn({name:'sales_order_id'})
    sales_order: SalesOrder[];
}
