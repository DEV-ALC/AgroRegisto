import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface TopBarProps {
  title: string;
  showBackButton?: boolean;
}

/**
 * Componente que exibe um indicador de carregamento animado (spinner).
 *  @param title Mensagem opcional para exibir.
 *  @param showBackButton Se vai mostrar o botão de voltar
 */
export default function TopBar({ title, showBackButton = false }: TopBarProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white px-6 py-4 shadow-md flex items-center justify-between">
      <div className="flex items-center gap-3">
        {showBackButton && (
          <button
            onClick={() => navigate(-1)}
            className="text-white hover:text-gray-200"
          >
            <FaArrowLeft />
          </button>
        )}
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    </header>
  );
}
