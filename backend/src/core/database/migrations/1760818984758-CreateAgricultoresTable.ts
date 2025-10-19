import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateAgricultoresTable1760818984758 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "agricultores",
                columns: [
                    {
                        name: "id",
                        type: "varchar",
                        isPrimary: true,
                        generationStrategy: "uuid",
                    },
                    {
                        name: "razao_social",
                        type: "varchar",
                    },
                    {
                        name: "nome_fantasia",
                        type: "varchar",
                    },
                    {
                        name: "documento",
                        type: "varchar",
                        isUnique: true, // Garante que não haverá CNPJ/CPF duplicado
                    },
                    {
                        name: "celular",
                        type: "varchar",
                        isNullable: true, // Campo não obrigatório
                    },
                    {
                        name: "cidade",
                        type: "varchar",
                    },
                    {
                        name: "estado",
                        type: "varchar",
                        length: "2",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "updated_at",
                        type: "timestamp",
                        default: "now()",
                    },
                    {
                        name: "deleted_at",
                        type: "timestamp",
                        isNullable: true, //nulo para registros ativos.
                    },
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("agricultores");
    }
}
