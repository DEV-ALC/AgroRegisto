import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import AgricultorForm from "../../components/AgricultorForm";
import {
  fetchAgricultor,
  updateAgricultor,
} from "../../services/Agricultor/AgricultorApi";
import type { Agricultor } from "../../models/AgricultorModel";
import TopBar from "../../components/TopBar";
import LoadingIndicator from "../../components/Loading";

/**
 * Formulario de atualização
 */
export default function AgricultorEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState<Agricultor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchAgricultor(id)
      .then(setData)
      .catch(() => setError("Erro ao carregar agricultor"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading)
    return <LoadingIndicator message="Buscando os dados do  agricultor..." />;
  if (error) return <div>{error}</div>;
  if (!data) return <div>Agricultor não encontrado</div>;

  const handleSubmit = async (formData: Partial<Agricultor>) => {
    try {
      await updateAgricultor(id!, formData);
      navigate("/agricultores");
    } catch (error: unknown) {
      // CORREÇÃO: Capturar o erro e usar a mensagem
      let errorMessage = "Erro ao atualizar agricultor.";
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      alert(errorMessage); // Exibir a mensagem específica do servidor
    }
  };

  return (
    <>
      <TopBar title="Editar Agricultor" showBackButton />
      <main className="p-6">
        <AgricultorForm initialData={data} onSubmit={handleSubmit} />
      </main>
    </>
  );
}
