import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js"; dotenv.config();
import { AppDataSource } from "./core/database/data-source.js";

const PORT = process.env.PORT || 3000;

async function startServer() {
    try {
        await AppDataSource.initialize();
        console.log("✔️ Conexão com o banco de dados estabelecida com sucesso!");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
        });
    } catch (error) {
        console.error("❌ Erro ao inicializar o servidor:");
        console.error(error);
        process.exit(1);
    }
}

startServer();