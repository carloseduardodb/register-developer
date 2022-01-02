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

  constructor(private level?: Partial<Level>) {
    if (level) {
      Object.assign(this, level);
    }
  }
}
