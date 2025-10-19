
import express from "express";
import routes from "./core/routes.js";
import { setupSwagger } from "./core/swagger.js";
import cors from "cors";

//Inicia o roteador e Cors
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

//Iniciando o swagger
setupSwagger(app);

export default app;