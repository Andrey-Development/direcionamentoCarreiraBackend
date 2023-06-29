import "reflect-metadata"
import { DataSource } from "typeorm"
import { CreateUsersTable1674307725393 } from './migrations/1674307725393-CreateUsersTable';
import User from "../app/entities/User";

export const AppDataSource = new DataSource({
    type: "mysql",
    database: "railway",
    host: "containers-us-west-13.railway.app",
    password: "cW9XMmDi3MM7hePIXJxO",
    port: 5513,
    username: "root",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [CreateUsersTable1674307725393],
    subscribers: [],
})
