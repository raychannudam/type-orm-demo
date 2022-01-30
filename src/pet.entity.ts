import { User } from './user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Pet{
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    name: string

    @ManyToOne(type => User, user => user.pets)
    ownwer: User
}