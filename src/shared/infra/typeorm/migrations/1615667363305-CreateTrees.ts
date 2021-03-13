import {MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateTrees1615667363305 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'trees',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'description',
              type: 'varchar',
            },
            {
              name: 'age',
              type: 'integer'
            },
            {
              name: 'specie_id',
              type: 'uuid'
            },
            {
              name: 'created_at',
              type: 'timestamp',
              default: 'now()',
            },
            {
              name: 'updated_at',
              type: 'timestamp',
              default: 'now()',
            },
          ],
          foreignKeys: [
            {
              name: 'TreesSpecies',
              columnNames: ['specie_id'],
              referencedTableName: 'species',
              referencedColumnNames: ['id'],
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            }
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('trees', 'TreesSpecies');

      await queryRunner.dropTable('trees');
    }

}
