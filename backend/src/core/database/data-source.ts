import 'dotenv/config';
import { DataSource } from "typeorm";

// Configurações do Banco de Dados
const dbConfig = {
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

/**
*Criação do AppDataSource
*/
export const AppDataSource = new DataSource({
    type: "mysql",
    host: dbConfig.host,
    port: dbConfig.port,
    username: dbConfig.username,
    password: dbConfig.password,
    database: dbConfig.database,
    synchronize: false,
    logging: true,
    entities: ["src/modules/**/*.ts"],
    migrations: [`src/core/database/migrations/*.ts`],
});