import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

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

    // @Column()
    // hobby: array

}
