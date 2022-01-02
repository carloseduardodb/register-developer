import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_TYPES } from '../interfaces/types';
import { LevelDomain } from 'src/level/domain/level.domain';
import { IGetAllLevelNotPaginateUseCase } from '../interfaces/usecase/get-all-level-not-paginate.usecase.interface';
import { IGetAllLevelNotPaginateService } from '../interfaces/services/get-all-level-not-paginate.service.interface';

@Injectable()
export class GetAllLevelNotPaginateUseCase
  implements IGetAllLevelNotPaginateUseCase
{
  constructor(
    @Inject(LEVEL_TYPES.services.IGetAllLevelService)
    private levelService: IGetAllLevelNotPaginateService,
  ) {}

  async getAllNotPaginate(): Promise<LevelDomain[]> {
    return await this.levelService.getAllNotPaginate();
  }
}
