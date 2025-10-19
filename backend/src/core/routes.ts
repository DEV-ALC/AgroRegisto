import { Router, Request, Response } from "express";
import { AgricultorController } from "../modules/agricultor/agricultorController.js";
import { validateRequiredFields } from "../core/middlewares/validateRequiredFields.js";
import { validateUpdateFields } from "../core/middlewares/validateUpdateFields.js";

const routes = Router();
const agricultorController = new AgricultorController();

// Campos obrigatórios
const requiredFields = ["razao_social", "nome_fantasia", "documento", "cidade", "estado"];

// Campos permitidos Update
const allowedFields = ["razao_social", "nome_fantasia", "celular", "cidade", "estado"];

/**
 * @openapi
 * /agricultores:
 *   get:
 *     summary: Lista todos os agricultores
 *     tags:
 *       - Agricultores
 *     responses:
 *       200:
 *         description: Lista de agricultores
 */
routes.get("/agricultores", agricultorController.list.bind(agricultorController));

/**
 * @openapi
 * /agricultores/{id}:
 *   get:
 *     summary: Retorna um agricultor pelo ID
 *     tags:
 *       - Agricultores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Agricultor encontrado
 *       404:
 *         description: Agricultor não encontrado
 */
routes.get("/agricultores/:id", agricultorController.getById.bind(agricultorController));

/**
 * @openapi
 * /agricultores:
 *   post:
 *     summary: Cria um novo agricultor
 *     tags:
 *       - Agricultores
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               razao_social:
 *                 type: string
 *               nome_fantasia:
 *                 type: string
 *               documento:
 *                 type: string
 *               celular:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *             required:
 *               - razao_social
 *               - nome_fantasia
 *               - documento
 *               - cidade
 *               - estado
 *     responses:
 *       201:
 *         description: Agricultor criado
 *       400:
 *         description: Requisição inválida
 *       409:
 *         description: Duplicidade de Cadastro
 */
routes.post(
    "/agricultores",
    validateRequiredFields(requiredFields),
    agricultorController.create.bind(agricultorController)
);

/**
 * @openapi
 * /agricultores/{id}:
 *   put:
 *     summary: Atualiza um agricultor existente
 *     tags:
 *       - Agricultores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               razao_social:
 *                 type: string
 *               nome_fantasia:
 *                 type: string
 *               celular:
 *                 type: string
 *               cidade:
 *                 type: string
 *               estado:
 *                 type: string
 *     responses:
 *       200:
 *         description: Agricultor atualizado
 *       400:
 *         description: Requisição inválida
 */
routes.put(
    "/agricultores/:id",
    validateUpdateFields(allowedFields),
    agricultorController.update.bind(agricultorController)
);

/**
 * @openapi
 * /agricultores/{id}:
 *   delete:
 *     summary: Remove um agricultor pelo ID
 *     tags:
 *       - Agricultores
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Agricultor removido
 *       400:
 *         description: Erro na requisição
 */
routes.delete("/agricultores/:id", agricultorController.delete.bind(agricultorController));

export default routes;
