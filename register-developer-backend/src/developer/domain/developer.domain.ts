import { IsString, IsNumber, IsDateString } from 'class-validator';
import { Level } from '../../level/domain/level.entity';

export class DeveloperDomain {
  @IsNumber()
  readonly level: Level;

  @IsString()
  readonly name: string;

  @IsString()
  readonly gender: 'male' | 'female' | 'other';

  @IsDateString()
  readonly birth_date: Date;

  @IsNumber()
  readonly age: number;

  @IsString()
  readonly hobby: string;
}
