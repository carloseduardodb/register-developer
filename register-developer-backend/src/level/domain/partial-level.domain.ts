import { IsString } from 'class-validator';

export class PartialLevel implements PartialLevel {
  @IsString()
  readonly name: string;
}
