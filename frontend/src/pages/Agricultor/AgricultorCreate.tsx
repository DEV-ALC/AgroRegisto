import { useNavigate } from "react-router-dom";
import AgricultorForm from "../../components/AgricultorForm";
import { createAgricultor } from "../../services/Agricultor/AgricultorApi";
import type { Agricultor } from "../../models/AgricultorModel";
import TopBar from "../../components/TopBar";

/**
 * Formulario de criação
 */
export default function AgricultorCreate() {
  const navigate = useNavigate();

  const handleSubmit = async (data: Partial<Agricultor>) => {
    try {
      await createAgricultor(data);
      navigate("/agricultores");
    } catch (error: unknown) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Ocorreu um erro desconhecido.");
      }
    }
  };

  return (
    <>
      <TopBar title="Criar Agricultor" showBackButton />
      <main className="p-6">
        <AgricultorForm onSubmit={handleSubmit} />
      </main>
    </>
  );
}
