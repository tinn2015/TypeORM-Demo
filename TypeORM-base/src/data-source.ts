import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"
import { People } from "./entity/People"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "pass123",
    database: "typeormtest",
    synchronize: true, // 生产环境 false
    // logging: false,
    entities: [User, People],
    migrations: [],
    subscribers: [],
})
