import { cpf, cnpj } from 'cpf-cnpj-validator';

/**
 * Utilitario para verificar documento valido CPF/CNPj
 * @param documento 
 * @returns bolean se o documento é valido
 */
export function isValidDocument(documento: string): boolean {
    const cleanedDocument = documento.replace(/[^\d]/g, '');
    return cpf.isValid(cleanedDocument) || cnpj.isValid(cleanedDocument);
}