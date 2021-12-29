import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  Generated,
  OneToMany,
} from 'typeorm';
import { Developer } from '../../developer/domain/developer.entity';

@Entity()
export class Level {
  @PrimaryGeneratedColumn('increment')
  level_id: number;

  @Column()
  @Generated('uuid')
  level_uuid: string;

  @Column()
  name: string;

  @OneToMany((type) => Developer, (developer) => developer.level)
  developers: Developer[];

  toJSON() {
    delete this.level_id;
    return this;
  }
}
