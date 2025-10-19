import { Request, Response, NextFunction } from "express";

/**
 * Middleware para validar campos enviados em um create
 * @param allowedFields Array com os nomes dos campos Requeridos
 */
export function validateRequiredFields(requiredFields: string[]) {
    return (req: Request, res: Response, next: NextFunction) => {
        const errors: string[] = [];

        requiredFields.forEach((field) => {
            const value = req.body[field];
            if (typeof value !== "string" || value.trim() === "") {
                errors.push(field);
            }
        });

        if (errors.length > 0) {
            return res.status(400).json({
                error: `Os seguintes campos são obrigatórios e não podem estar vazios: ${errors.join(
                    ", "
                )}`,
            });
        }

        next();
    };
}
