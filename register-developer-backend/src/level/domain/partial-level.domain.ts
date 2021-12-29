import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PartialLevel implements PartialLevel {
  @IsString()
  @ApiProperty()
  readonly name: string;
}
