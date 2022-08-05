import { MigrationInterface, QueryRunner } from "typeorm";
import { Migration } from "medusa-extender";

@Migration()
export class Store_id_nullableMigration1659664215521
  implements MigrationInterface
{
  name = "Store_id_nullableMigration1659664215521";

  public async up(queryRunner: QueryRunner): Promise<void> {
    const query = 'ALTER TABLE "role" ALTER COLUMN "store_id" DROP NOT NULL';
    await queryRunner.query(query);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const query = 'ALTER TABLE "role" ALTER COLUMN "store_id" SET NOT NULL';
    await queryRunner.query(query);
  }
}
