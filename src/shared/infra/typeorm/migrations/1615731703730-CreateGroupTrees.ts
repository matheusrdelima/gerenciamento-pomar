import {MigrationInterface, QueryRunner, Table} from "typeorm";

export default class CreateGroupTrees1615731703730 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table({
          name: 'grouptrees',
          columns: [
            {
              name: 'group_id',
              type: 'uuid'
            },
            {
              name: 'tree_id',
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
              name: 'GroupForeignKey',
              columnNames: ['group_id'],
              referencedTableName: 'group',
              referencedColumnNames: ['id'],
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            },
            {
              name: 'TreeForeignKey',
              columnNames: ['tree_id'],
              referencedTableName: 'trees',
              referencedColumnNames: ['id'],
              onUpdate: 'CASCADE',
              onDelete: 'CASCADE',
            },
          ]
        }),
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropForeignKey('grouptrees', 'GroupForeignKey');
      await queryRunner.dropForeignKey('grouptrees', 'TreeForeignKey');

      await queryRunner.dropTable('grouptrees');
    }

}
