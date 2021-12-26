import { IsString, IsNumber, IsDateString } from 'class-validator';

export class LevelDomain {
  @IsString()
  readonly name: string;
}
