import type { Agricultor } from "../../models/AgricultorModel";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

/**
 * Lista Agricultores
 * @returns {Promise<Agricultor[]>} Uma promessa que resolve para o objeto do agricultor criado.
 */
export async function fetchAgricultores(): Promise<Agricultor[]> {
    const res = await fetch(`${BASE_URL}/agricultores`);
    if (!res.ok) throw new Error("Erro ao buscar agricultores");
    return res.json();
}

/**
 * Busca um Agricultor pelo id.
 * @param id Id do agricultor.
 * @returns {Promise<Agricultor>} 
 */
export async function fetchAgricultor(id: string): Promise<Agricultor> {
    const res = await fetch(`${BASE_URL}/agricultores/${id}`);
    if (!res.ok) throw new Error("Erro ao buscar agricultor");
    return res.json();
}

/**
 * Cria um novo registro de agricultor.
 * @param {Partial<Agricultor>} data Objeto contendo os dados do novo agricultor.
 * @throws {Error} Se a criação falhar.
 */
export async function createAgricultor(data: Partial<Agricultor>) {
    const res = await fetch(`${BASE_URL}/agricultores`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (res.status === 409) {
        throw new Error("Documento já cadastrado");
    }
    if (!res.ok) { throw new Error("Erro ao criar agricultor") };
    return res.json();
}

/**
 * Atualiza os dados de um agricultor existente.
 * @param {string} id O identificador único (UUID) do agricultor a ser atualizado.
 * @param {Partial<Agricultor>} data Objeto contendo os campos a serem modificados.
 * @throws {Error} Se a atualização falhar.
 */
export async function updateAgricultor(id: string, data: Partial<Agricultor>) {
    const res = await fetch(`${BASE_URL}/agricultores/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) throw new Error("Erro ao atualizar agricultor");
    return res.json();
}

/**
 * Deleta um agricultor específico.
 * @param {string} id O identificador único (UUID) do agricultor a ser deletado.
 * @throws {Error} Se a exclusão falhar.
 */
export async function deleteAgricultor(id: string) {
    const res = await fetch(`${BASE_URL}/agricultores/${id}`, { method: "DELETE" });
    if (!res.ok) throw new Error("Erro ao deletar agricultor");
}
