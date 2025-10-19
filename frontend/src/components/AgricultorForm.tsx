import { useState } from "react";
import InputField from "./InputField";
import Button from "./Button";
import type { Agricultor } from "../models/AgricultorModel";
import { isValidDocument } from "../utils/documentValidation";
import { FaSave } from "react-icons/fa";

interface Props {
  initialData?: Partial<Agricultor>;
  onSubmit: (data: Partial<Agricultor>) => void;
}

/**
 * Componente De Formulario de Agricultores.
 */
export default function AgricultorForm({ initialData = {}, onSubmit }: Props) {
  const [form, setForm] = useState({
    nome_fantasia: initialData.nome_fantasia || "",
    razao_social: initialData.razao_social || "",
    documento: initialData.documento || "",
    celular: initialData.celular || "",
    cidade: initialData.cidade || "",
    estado: initialData.estado || "",
  });

  const isEditing = !!initialData.documento;

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let newValue = value;

    if (name === "estado") {
      newValue = value.slice(0, 2).toUpperCase();
    } else if (name === "documento") {
      const digitsOnly = value.replace(/\D/g, "");
      newValue = digitsOnly.slice(0, 14);
    } else if (name === "celular") {
      const digitsOnly = value.replace(/\D/g, "");
      newValue = digitsOnly.slice(0, 11);
    }

    setForm({ ...form, [name]: newValue });

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  {
    /* Validações */
  }
  const validate = () => {
    const newErrors: Record<string, string> = {};
    const fieldsToValidate: (keyof typeof form)[] = [
      "nome_fantasia",
      "razao_social",
      "documento",
      "cidade",
      "estado",
    ];

    fieldsToValidate.forEach((field) => {
      if (!form[field].trim()) {
        newErrors[field as string] = "Campo obrigatório";
      }
    });

    if (form.documento.trim() && !newErrors.documento) {
      if (!isValidDocument(form.documento)) {
        newErrors.documento = "CNPJ/CPF inválido. Verifique os números.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    let dataToSubmit: Partial<Agricultor> = Object.fromEntries(
      Object.entries(form).filter(([, v]) => v.trim() !== "")
    );
    if (isEditing) {
      const dataForUpdate = { ...dataToSubmit };
      delete dataForUpdate.documento;
      dataToSubmit = dataForUpdate;
    }
    onSubmit(dataToSubmit);
  };

  {
    /* Corpo do Formulario */
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto bg-white p-6 rounded shadow"
    >
      <InputField
        label="Nome Fantasia"
        name="nome_fantasia"
        value={form.nome_fantasia}
        onChange={handleChange}
        required
        error={errors.nome_fantasia}
      />
      <InputField
        label="Razão Social"
        name="razao_social"
        value={form.razao_social}
        onChange={handleChange}
        required
        error={errors.razao_social}
      />
      <InputField
        label="Documento"
        name="documento"
        value={form.documento}
        onChange={handleChange}
        required
        error={errors.documento}
        placeholder="CPF/CNPJ"
        disabled={isEditing}
      />
      <InputField
        label="Celular"
        name="celular"
        value={form.celular}
        onChange={handleChange}
        placeholder="(99) 99999-9999"
      />
      <InputField
        label="Cidade"
        name="cidade"
        value={form.cidade}
        onChange={handleChange}
        required
        error={errors.cidade}
      />
      <InputField
        label="Estado"
        name="estado"
        value={form.estado}
        onChange={handleChange}
        required
        error={errors.estado}
        placeholder="Ex: SP, MG"
      />
      <div className="flex justify-end space-x-3 mt-6 border-t pt-4">
        <Button type="submit" variant="primary">
          <FaSave className="mr-2" /> Salvar
        </Button>
      </div>
    </form>
  );
}
