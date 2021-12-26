import { Entity, Column, PrimaryGeneratedColumn, Generated } from 'typeorm';

@Entity()
export class Level {
  @PrimaryGeneratedColumn('increment')
  level_id: number;

  @Generated('uuid')
  level_uuid: string;

  @Column()
  name: string;
}
