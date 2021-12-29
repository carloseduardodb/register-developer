import { IsString } from 'class-validator';

export class LevelDomain {
  @IsString()
  readonly name: string;
}
