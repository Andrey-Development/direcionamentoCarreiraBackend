import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1674307725393 } from './migrations/1674307725393-CreateUsersTable';
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "9761",
    database: "project_typeorm",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1674307725393],
    subscribers: [],
})
