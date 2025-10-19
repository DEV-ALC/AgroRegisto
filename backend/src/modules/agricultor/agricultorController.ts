import { Request, Response } from 'express';
import { AppDataSource } from '../../core/database/data-source.js';
import { AgricultorEntity, AgricultorRepository } from './agricultorRepository.js';
import { AgricultorService } from './agricultorService.js';

/**
 * O Controller gerencia o fluxo de requisições
 * delegando a lógica de negócio para a camada de Serviço.
 */

export class AgricultorController {
    private agricultorService: AgricultorService;

    constructor() {
        const ormRepo = AppDataSource.getRepository(AgricultorEntity);
        const repository = new AgricultorRepository(ormRepo);
        this.agricultorService = new AgricultorService(repository);
    }

    /**
     * Lida com a requisição para criar um novo agricultor.
     */
    public async create(req: Request, res: Response): Promise<Response> {
        try {
            // Delega a tarefa para a equipe que já existe.
            const agricultor = await this.agricultorService.create(req.body);
            return res.status(201).json(agricultor);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    /**
     * Lida com a requisição para listar todos os agricultores.
     */
    public async list(req: Request, res: Response): Promise<Response> {
        try {
            const agricultores = await this.agricultorService.findAll();
            return res.status(200).json(agricultores);
        } catch (error: any) {
            console.error("ERRO AO LISTAR AGRICULTORES:", error);
            return res.status(500).json({ error: 'Erro interno do servidor.' });
        }
    }

    /**
     * Lida com a requisição para buscar um agricultor pelo ID.
     */
    public async getById(req: Request, res: Response): Promise<Response> {
        try {
            const { id } = req.params;
            const agricultor = await this.agricultorService.findById(id);
            return res.status(200).json(agricultor);
        } catch (error: any) {
            return res.status(404).json({ error: error.message }); // 404 Not Found é mais apropriado aqui
        }
    }

    /**
     * Lida com a requisição para atualizar um agricultor.
     */
    public async update(req: Request, res: Response): Promise<Response> {
        try {
            const agricultor = await this.agricultorService.update(req.params.id, req.body);
            return res.status(200).json(agricultor);
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }

    /**
     * Lida com a requisição para deletar um agricultor.
     */
    public async delete(req: Request, res: Response): Promise<Response> {
        try {
            await this.agricultorService.delete(req.params.id);
            return res.status(204).send();
        } catch (error: any) {
            return res.status(400).json({ error: error.message });
        }
    }
}