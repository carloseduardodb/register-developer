import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_TYPES } from '../interfaces/types';
import { IGetAllLevelUseCase } from '../interfaces/usecase/get-all-level.usecase.interface';
import { IGetAllLevelService } from '../interfaces/services/get-all-level.service.interface';
import { LevelDomain } from 'src/level/domain/level.domain';
import { LevelPaginationDomain } from '../domain/level-pagination.domain';

@Injectable()
export class GetAllLevelUseCase implements IGetAllLevelUseCase {
  constructor(
    @Inject(LEVEL_TYPES.services.IGetAllLevelService)
    private levelService: IGetAllLevelService,
  ) {}

  async getAll(query: {
    take: number;
    page: number;
    skip: number;
    keyword: string;
  }): Promise<LevelPaginationDomain> {
    return await this.levelService.getAll(query);
  }
}
