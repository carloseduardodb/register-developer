import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1640995810505 implements MigrationInterface {
    name = 'CreateTables1640995810505'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "level" ("level_id" SERIAL NOT NULL, "level_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, CONSTRAINT "PK_055a611503ae5adb023e49d1881" PRIMARY KEY ("level_id"))`);
        await queryRunner.query(`CREATE TABLE "developer" ("developer_id" SERIAL NOT NULL, "developer_uuid" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "gender" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "age" integer NOT NULL, "hobby" character varying NOT NULL, "level_id" integer, CONSTRAINT "PK_17fbfc4f408cb281aca692b1145" PRIMARY KEY ("developer_id"))`);
        await queryRunner.query(`ALTER TABLE "developer" ADD CONSTRAINT "FK_e65a95bbff474e12a3fd4596ab3" FOREIGN KEY ("level_id") REFERENCES "level"("level_id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "developer" DROP CONSTRAINT "FK_e65a95bbff474e12a3fd4596ab3"`);
        await queryRunner.query(`DROP TABLE "developer"`);
        await queryRunner.query(`DROP TABLE "level"`);
    }

}
