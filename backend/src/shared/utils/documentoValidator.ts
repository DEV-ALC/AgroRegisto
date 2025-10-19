import { cpf, cnpj } from 'cpf-cnpj-validator';


/**
 * Utilitario para verificar documento valido CPF/CNPj
 * @param documento 
 * @returns bolean se o documento é valido
 */
export function isValidDocument(documento: string): boolean {
    // Remove caracteres especiais
    const cleanedDocument = documento.replace(/[^\d]/g, '');

    // Verifica se é um documento válido 
    return cpf.isValid(cleanedDocument) || cnpj.isValid(cleanedDocument);
}