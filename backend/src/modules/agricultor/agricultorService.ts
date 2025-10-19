import { IAgricultorRepository } from './agricultorRepository.js';
import { IAgricultorDTO, Agricultor } from './agricultorModel.js';
import { isValidDocument } from '../../shared/utils/documentoValidator.js';

export class AgricultorService {
    constructor(private agricultorRepository: IAgricultorRepository) { }

    /**
    * Cria um novo agricultor ou reativa um existente que foi deletado.
    * @param data - Os dados do agricultor para a criação (DTO).
    * @returns Uma Promise com o objeto do agricultor criado ou reativado.
    * @throws {Error} Se o documento for inválido ou se já existir um cadastro ATIVO com o mesmo documento.
    */
    public async create(data: IAgricultorDTO): Promise<Agricultor> {
        if (!isValidDocument(data.documento)) {
            throw new Error('O CPF/CNPJ informado é inválido.');
        }

        const documentoLimpo = data.documento.replace(/[^\d]/g, '');

        // Busca por qualquer agricultor com o documento, incluindo os deletados.
        const agricultorExistente = await this.agricultorRepository.findByDocumentoIncludingDeleted(documentoLimpo);

        if (agricultorExistente) {
            if (agricultorExistente.deleted_at === null) {
                const error = new Error('Documento já cadastrado e ativo.');
                (error as any).status = 409;
                throw error;
            }

            const dadosParaAtualizar = {
                ...data,
                deleted_at: null,
            };

            const agricultorReativado = await this.agricultorRepository.update(agricultorExistente.id, dadosParaAtualizar);

            if (!agricultorReativado) {
                throw new Error('Falha ao tentar reativar o cadastro do agricultor.');
            }

            return agricultorReativado;
        }

        // cria um novo.
        return this.agricultorRepository.create({
            ...data,
            documento: documentoLimpo,
        });
    }

    /**
     *Listar todos os agricultores.
     * @returns Lista com os os agricultores
     */
    public async findAll(): Promise<Agricultor[]> {
        return this.agricultorRepository.findAll();
    }

    /**
     * Busca um único agricultor pelo seu ID.
     * @param id - O UUID do agricultor a ser buscado.
     * @returns Uma Promise com o objeto do agricultor, ou null se não for encontrado.
     * @throws {Error} Se o agricultor não for encontrado.
     */
    public async findById(id: string): Promise<Agricultor> {
        const agricultor = await this.agricultorRepository.findById(id);
        if (!agricultor) {
            throw new Error('Agricultor não encontrado.');
        }
        return agricultor;
    }

    /**
     * Atualizar um agricultor.
     * @param id - O UUID do agricultor a ser buscado.
     * @param data - O body com os dados a serem atualizados.
     * @returns Uma Promise com o objeto do agricultor, ou null se não for encontrado.
     * @throws {Error} Se o agricultor não for encontrado.
     */
    public async update(id: string, data: Partial<IAgricultorDTO>): Promise<Agricultor> {
        const agricultor = await this.agricultorRepository.findById(id);
        if (!agricultor) {
            throw new Error('Agricultor não encontrado.');
        }

        const agricultorAtualizado = await this.agricultorRepository.update(id, data);
        return agricultorAtualizado!;
    }

    /**
     *  Deletar (soft delete) um agricultor.
     * @param id - O UUID do agricultor a ser buscado.
     * @throws {Error} Se o agricultor não for encontrado.
     */
    public async delete(id: string): Promise<void> {
        const agricultor = await this.agricultorRepository.findById(id);
        if (!agricultor) {
            throw new Error('Agricultor não encontrado.');
        }
        await this.agricultorRepository.delete(id);
    }
}