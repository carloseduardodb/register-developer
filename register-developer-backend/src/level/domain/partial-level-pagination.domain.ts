import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PartialLevelPaginationDomain {
  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  take: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  page: number;

  @Type(() => Number)
  @IsNumber()
  @IsOptional()
  skip: number;

  @IsString()
  @IsOptional()
  keyword: string;
}
