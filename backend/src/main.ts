// ARQUIVO: src/main.ts

import "reflect-metadata";
import app from "./app.js";
import { AppDataSource } from "./core/database/data-source.js";

const PORT = process.env.PORT;

// Inicia o banco
AppDataSource.initialize()
    .then(() => {
        console.log("✔️ Conexão com o banco de dados estabelecida com sucesso!");

        app.listen(PORT, () => {
            console.log(`🚀 Servidor rodando na porta ${PORT}`);
        });
    })
    .catch((error) => {
        console.error("❌ Erro ao conectar com o banco de dados:", error);
    });