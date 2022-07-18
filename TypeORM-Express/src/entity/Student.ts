import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn } from "typeorm"
import { Hobby } from './Hobby'

@Entity()
export class Student {

    @PrimaryGeneratedColumn() // 自增
    id: number

    @Column()
    name: string

    @Column()
    grade: number

    @Column()
    age: number

    // 创建一对一关系
    // 开启级联操作只需要保存一次
    @OneToOne(type => Hobby, {cascade: true})
    @JoinColumn() // 这个表明将在将在这张表中创建外键， 通过外键来建立关系
    hobbys: Hobby

}
