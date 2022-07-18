import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class Hobby {
    @PrimaryGeneratedColumn()
    id: number

    @Column("varchar", {array: true}) // array 保存数组类型
    hobbysList: string[]
    
    @Column({default: ''})
    desc: string
}