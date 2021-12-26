import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_TYPES } from '../interfaces/types';
import { IGetAllLevelUseCase } from '../interfaces/usecase/get-all-level.usecase.interface';
import { IGetAllLevelService } from '../interfaces/services/get-all-level.service.interface';
import { LevelDomain } from 'src/level/domain/level.domain';

@Injectable()
export class GetAllLevelUseCase implements IGetAllLevelUseCase {
  constructor(
    @Inject(LEVEL_TYPES.services.IGetAllLevelService)
    private productService: IGetAllLevelService,
  ) {}

  async getAll(): Promise<LevelDomain[]> {
    return await this.productService.getAll();
  }
}
