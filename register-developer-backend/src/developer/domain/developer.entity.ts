import { Level } from 'src/level/domain/level.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  Generated,
} from 'typeorm';

@Entity()
export class Developer {
  @PrimaryGeneratedColumn('increment')
  developer_id: number;

  @Generated('uuid')
  developer_uuid: string;

  @OneToOne(() => Level)
  @JoinColumn({
    name: 'level_id',
  })
  level: Level;

  @Column()
  name: string;

  @Column()
  gender: 'male' | 'female' | 'other';

  @Column()
  birth_date: Date;

  @Column()
  age: number;

  @Column()
  hobby: string;
}
