import { FaSpinner } from "react-icons/fa";

interface LoadingIndicatorProps {
  message?: string;
}

/**
 * Componente que exibe um indicador de carregamento animado (spinner).
 * * @param message Mensagem opcional para exibir abaixo do spinner.
 */
export default function LoadingIndicator({
  message = "Carregando dados...",
}: LoadingIndicatorProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-indigo-600">
      <FaSpinner className="animate-spin text-4xl mb-4" />
      <div className="text-xl font-semibold">{message}</div>
      <div className="text-sm text-gray-500 mt-1">Aguarde um momento.</div>
    </div>
  );
}
