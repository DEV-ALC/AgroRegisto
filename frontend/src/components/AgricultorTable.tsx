import { Link } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import type { Agricultor } from "../models/AgricultorModel";
import Button from "./Button";

interface AgricultoresTableProps {
  agricultores: Agricultor[];
  onDelete: (id: string) => void;
}

/**
 * Componente Principal da tabela de agricultores.
 */
export default function AgricultoresTable({
  agricultores,
  onDelete,
}: AgricultoresTableProps) {
  return (
    <div className="hidden md:block bg-white shadow-xl rounded-lg overflow-hidden">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Nome Fantasia
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Razão Social
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Documento
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Cidade/Estado
            </th>
            <th className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
              Ações
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {agricultores.map((a) => (
            <tr
              key={a.id}
              className="hover:bg-indigo-50 transition duration-150"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {a.nome_fantasia}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {a.razao_social}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {a.documento}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {a.cidade}/{a.estado}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-center text-sm font-medium">
                <div className="inline-flex space-x-2">
                  <Link to={`/agricultores/${a.id}/editar`}>
                    <Button variant="edit">
                      <FaEdit />
                    </Button>
                  </Link>
                  <Button variant="danger" onClick={() => onDelete(a.id)}>
                    <FaTrash />
                  </Button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
