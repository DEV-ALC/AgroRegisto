/**
 * Interface identica a da Api para comunicação
 */
export interface Agricultor {
    id: string;
    razao_social: string;
    nome_fantasia: string;
    documento: string;
    celular: string;
    cidade: string;
    estado: string;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}
