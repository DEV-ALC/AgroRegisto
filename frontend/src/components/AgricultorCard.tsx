import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import Button from "./Button";
import type { Agricultor } from "../models/AgricultorModel";

interface AgricultorCardProps {
  agricultor: Agricultor;
  onDelete: (id: string) => void;
}

/**
 * Componente de card criado para atender telas menores
 */
export default function AgricultorCard({
  agricultor,
  onDelete,
}: AgricultorCardProps) {
  return (
    <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-md md:hidden mb-4 transition duration-300 hover:shadow-lg">
      {/* Título Principal */}
      <div className="text-lg font-bold text-indigo-700">
        {agricultor.nome_fantasia}
      </div>

      {/* Subtítulo/Detalhe */}
      <div className="text-sm text-gray-500 mb-2 border-b pb-2">
        {agricultor.razao_social}
      </div>

      {/* Detalhes Empilhados */}
      <div className="mt-3 space-y-1 text-sm">
        <p>
          <strong className="font-medium">Documento:</strong>{" "}
          {agricultor.documento}
        </p>
        <p>
          <strong className="font-medium">Local:</strong> {agricultor.cidade}/
          {agricultor.estado}
        </p>
      </div>

      {/* Botões de Ação */}
      <div className="mt-4 flex justify-end space-x-2">
        <Link to={`/agricultores/${agricultor.id}/editar`}>
          <Button variant="edit">
            <FaEdit />
          </Button>
        </Link>
        <Button variant="danger" onClick={() => onDelete(agricultor.id)}>
          <FaTrash />
        </Button>
      </div>
    </div>
  );
}
