import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  fetchAgricultores,
  deleteAgricultor,
} from "../../services/Agricultor/AgricultorApi";
import type { Agricultor } from "../../models/AgricultorModel";
import Button from "../../components/Button";
import TopBar from "../../components/TopBar";
import AgricultorCard from "../../components/AgricultorCard";
import AgricultoresTable from "../../components/AgricultorTable";
import LoadingIndicator from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

/**
 * Componente Principal: Lista dos Agricultores
 */
export default function AgricultoresList() {
  const [agricultores, setAgricultores] = useState<Agricultor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadAgricultores = () => {
    setLoading(true);
    setError(null);
    fetchAgricultores()
      .then((data) => setAgricultores(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    loadAgricultores();
  }, []);

  const handleRetry = () => {
    loadAgricultores();
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Deseja realmente deletar?")) return;
    try {
      await deleteAgricultor(id);
      setAgricultores((prev) => prev.filter((a) => a.id !== id));
    } catch {
      alert("Erro ao deletar agricultor");
    }
  };

  if (loading)
    return <LoadingIndicator message="Buscando dados de agricultores..." />;
  if (error) return <ErrorMessage message={error} onRetry={handleRetry} />;
  if (agricultores.length === 0)
    return (
      <>
        <TopBar title="Lista de Agricultores" />
        <div className="text-center p-8 text-xl text-gray-500">
          Nenhum agricultor encontrado.
          <div className="mt-4">
            <Link to="/agricultores/novo">
              <Button variant="primary">Criar Novo Agricultor</Button>
            </Link>
          </div>
        </div>
      </>
    );

  return (
    <>
      <TopBar title="Lista de Agricultores" />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Botão de Novo Agricultor */}
        <div className="mb-6 flex justify-end">
          <Link to="/agricultores/novo">
            <Button variant="primary">Novo Agricultor</Button>
          </Link>
        </div>

        {/*  VISUALIZAÇÃO EM TABELA (PARA DESKTOPS) */}
        <AgricultoresTable
          agricultores={agricultores}
          onDelete={handleDelete}
        />

        {/*  VISUALIZAÇÃO EM CARDS (PARA MOBILE) */}
        <div className="md:hidden">
          {agricultores.map((a) => (
            <AgricultorCard key={a.id} agricultor={a} onDelete={handleDelete} />
          ))}
        </div>
      </div>
    </>
  );
}
