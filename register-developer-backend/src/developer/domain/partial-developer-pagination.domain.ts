import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty, ApiQuery } from '@nestjs/swagger';

export class PartialDeveloperPaginationDomain {
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    minimum: 0,
    maximum: 10000,
    title: 'Take',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 0,
    required: false,
  })
  take: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    minimum: 0,
    maximum: 10000,
    title: 'Page',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 0,
    required: false,
  })
  page: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  @ApiProperty({
    minimum: 0,
    maximum: 10000,
    title: 'Skip',
    exclusiveMaximum: true,
    exclusiveMinimum: true,
    format: 'int32',
    default: 0,
    required: false,
  })
  skip: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    required: false,
  })
  keyword: string;
}
