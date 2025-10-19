import { Router, Request, Response } from 'express';
import { AgricultorController } from '../modules/agricultor/agricultorController.js';

const routes = Router();

//unica instância do Controller.
const agricultorController = new AgricultorController();

//Rotas
routes.get('/agricultores', (req: Request, res: Response) => agricultorController.list(req, res));
routes.get('/agricultores/:id', (req: Request, res: Response) => agricultorController.getById(req, res));
routes.post('/agricultores', (req: Request, res: Response) => agricultorController.create(req, res));
routes.put('/agricultores/:id', (req: Request, res: Response) => agricultorController.update(req, res));
routes.delete('/agricultores/:id', (req: Request, res: Response) => agricultorController.delete(req, res));

export default routes;