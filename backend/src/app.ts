
import express from "express";
import dotenv from "dotenv";
import routes from "./core/routes.js";

dotenv.config();
//Inicia o roteador 
const app = express();
app.use(express.json());
app.use(routes);

export default app;