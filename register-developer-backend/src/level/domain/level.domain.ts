import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LevelDomain {
  @IsString()
  @ApiProperty()
  readonly name: string;
}
