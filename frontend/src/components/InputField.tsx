import React from "react";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  value: string;
  error?: string;
}

/**
 * Componente Para padronizar os inputs.
 */
export default function InputField({
  label,
  name,
  value,
  error,
  placeholder,
  required,
  onChange,
  className,
  ...rest
}: Props) {
  const isDisabled = rest.disabled;

  // Lógica de classes dinâmicas
  const errorClasses = error ? "border-red-500" : "border-gray-300";
  const disabledClasses = isDisabled
    ? "bg-gray-100 cursor-not-allowed"
    : "focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500";
  const baseClasses =
    "w-full px-3 py-2 border rounded shadow-sm transition duration-150 ease-in-out";

  return (
    <div className="mb-4">
      {/* Label e Indicador de Obrigatório */}
      <label htmlFor={name} className="block font-medium mb-1 text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Campo Input */}
      <input
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        required={required}
        onChange={onChange}
        {...rest}
        className={`${baseClasses} ${errorClasses} ${disabledClasses} ${className}`}
      />

      {/* Mensagem de Erro */}
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
