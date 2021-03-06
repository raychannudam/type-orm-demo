import { Pet } from './pet.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(type => Pet, pet => pet.ownwer)
    pets: Pet[]
}