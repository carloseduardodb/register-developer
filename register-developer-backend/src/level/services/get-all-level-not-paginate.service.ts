import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from '../domain/level.entity';
import { IGetAllLevelNotPaginateUseCase } from '../interfaces/usecase/get-all-level-not-paginate.usecase.interface';

@Injectable()
export class GetAllLevelNotPaginateService
  implements IGetAllLevelNotPaginateUseCase
{
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async getAllNotPaginate(): Promise<Level[]> {
    return await this.levelRepository.find();
  }
}
