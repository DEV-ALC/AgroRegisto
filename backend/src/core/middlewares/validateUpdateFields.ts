import { Request, Response, NextFunction } from "express";

/**
 * Middleware para validar campos enviados em um update
 * @param allowedFields Array com os nomes dos campos permitidos
 */
export function validateUpdateFields(allowedFields: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const bodyKeys = Object.keys(req.body);

        for (const key of bodyKeys) {
            if (!allowedFields.includes(key)) {
                return res.status(400).json({ error: `Campo inválido: ${key}` });
            }
            const value = req.body[key];
            if (typeof value === "string" && value.trim() === "") {
                return res.status(400).json({ error: `Campo '${key}' não pode ser vazio` });
            }
        }

        next();
    };
}
