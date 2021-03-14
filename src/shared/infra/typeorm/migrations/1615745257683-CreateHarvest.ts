import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateHarvest1615745257683 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'harvest',
          columns: [
            {
              name: 'id',
              type: 'uuid',
              isPrimary: true,
              generationStrategy: 'uuid',
              default: 'uuid_generate_v4()',
            },
            {
              name: 'information',
              type: 'varchar',
            },
            {
              name: 'date_harvest',
              type: 'timestamp with time zone',
            },
            {
              name: 'gross_weight',
              type: 'decimal(7,2)',
            },
            {
              name: 'tree_id',
              type: 'uuid',
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
              name: 'HarvestTree',
              columnNames: ['tree_id'],
              referencedTableName: 'trees',
              referencedColumnNames: ['id'],
              onUpdate: 'SET NULL',
              onDelete: 'SET NULL',
            },
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('harvest', 'HarvestTree');

      await queryRunner.dropTable('harvest');
    }

}
