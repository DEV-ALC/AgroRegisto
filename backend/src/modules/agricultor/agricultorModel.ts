/**
 * Interface principal que representa o Agricultor, 
 * exatamente como ela é no banco de dados.
 */
export interface Agricultor {
    id: string;
    razao_social: string;
    nome_fantasia: string;
    documento: string;
    celular: string | null;
    cidade: string;
    estado: string;
    created_at: Date;
    updated_at: Date;
    deleted_at: Date | null; // para o soft delete
}

/**
 * Interface DTO
 * Representa o conjunto de dados necessários para criar ou atualizar um Agricultor.
 */
export interface IAgricultorDTO {
    razao_social: string;
    nome_fantasia: string;
    documento: string;
    celular?: string | null;
    cidade: string;
    estado: string;
}