import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateUsersTable1674307725393 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'int',
                        isPrimary: true,
                        generationStrategy: 'increment'
                    },
                    {
                        name: 'email',
                        type: 'varchar',
                        length: '100',
                        isUnique: true,
                        isNullable: true
                    },
                    {
                        name: 'nome',
                        type: 'varchar',
                        length: '100',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'sobrenome',
                        type: 'varchar',
                        length: '100',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'data_nascimento',
                        type: 'DATE', 
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'sexo',
                        type: 'int',
                        isNullable: true
                    },
                    {
                        name: 'numero',
                        type: 'varchar',
                        length: '11',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'cpf',
                        type: 'varchar',
                        length: '11',
                        default: null,
                        isUnique: true,
                        isNullable: true
                    },
                    {
                        name: 'avatar',
                        type: 'text',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'created_at',
                        type: 'DATE',
                        default: 'NOW()',
                        isNullable: true
                    },
                    {
                        name: 'updated_at',
                        type: 'DATE',
                        default: null,
                        isNullable: true
                    },
                    {
                        name: 'deleted_at',
                        type: 'DATE',
                        default: null,
                        isNullable: true
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
