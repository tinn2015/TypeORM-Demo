import "reflect-metadata"
import { DataSource } from "typeorm"
import { Student } from "./entity/Student"
import { Hobby } from "./entity/Hobby"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass123",
    database: "typeormtest",
    synchronize: true,
    logging: false,
    entities: [Student, Hobby],
    migrations: [],
    subscribers: [],
})
