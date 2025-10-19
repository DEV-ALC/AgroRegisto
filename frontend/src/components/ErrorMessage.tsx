import { FaExclamationTriangle } from "react-icons/fa";

interface ErrorMessageProps {
  message: string;
  onRetry?: () => void;
}

/**
 * Componente Amigavel de erro.
 */
export default function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="flex flex-col items-center justify-center p-12 bg-red-50 border border-red-200 rounded-lg shadow-md max-w-lg mx-auto mt-12">
      {/* Ícone de Alerta */}
      <FaExclamationTriangle className="text-red-500 text-4xl mb-4" />

      {/* Título do Erro */}
      <div className="text-xl font-bold text-red-700 mb-2">
        Ops! Ocorreu um erro.
      </div>

      {/* Mensagem Detalhada do Erro */}
      <p className="text-center text-sm text-red-600 mb-6">
        Detalhes: **{message}**
      </p>

      {/* Botão de Tentativa (Opcional) */}
      {onRetry && (
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700 transition duration-150"
        >
          Tentar Novamente
        </button>
      )}
    </div>
  );
}
