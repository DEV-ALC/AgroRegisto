interface Props {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  variant?: "primary" | "danger" | "secondary" | "edit";
}

/**
 * Componente Para padronizar os buttons.
 */
export default function Button({
  children,
  onClick,
  type = "button",
  variant = "primary",
}: Props) {
  const base = "px-4 py-2 rounded font-semibold transition-colors";
  const colors = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
    edit: "bg-yellow-400 text-white hover:bg-yellow-600",
    secondary: "bg-gray-300 text-gray-800 hover:bg-gray-400",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${colors[variant]}`}
    >
      {children}
    </button>
  );
}
