import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

export function setupSwagger(app: Express) {
    const options = {
        definition: {
            openapi: "3.0.0",
            info: {
                title: "AgroRegisto API",
                version: "1.0.0",
                description: "Documentação da API de Agricultores",
            },
        },
        apis: ["./src/core/**/*.ts"],
    };

    const swaggerSpec = swaggerJSDoc(options);

    app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
