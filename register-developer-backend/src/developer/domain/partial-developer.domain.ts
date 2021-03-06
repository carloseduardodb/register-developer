import { IsString, IsNumber, IsDateString } from 'class-validator';
import { Level } from '../../level/domain/level.entity';
import { ApiProperty } from '@nestjs/swagger';

export class PartialDeveloper implements PartialDeveloper {
  @IsNumber()
  @ApiProperty({
    example: 1,
    type: Number,
  })
  readonly level: Level;

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly gender: 'male' | 'female' | 'other';

  @IsDateString()
  @ApiProperty()
  readonly birth_date: Date;

  @IsNumber()
  @ApiProperty()
  readonly age: number;

  @IsString()
  @ApiProperty()
  readonly hobby: string;
}
