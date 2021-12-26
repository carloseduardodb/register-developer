import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_TYPES } from '../interfaces/types';
import { IGetLevelUseCase } from '../interfaces/usecase/get-level.usecase.interface';
import { LevelDomain } from 'src/level/domain/level.domain';
import { IGetLevelService } from '../interfaces/services/get-level.service.interface';

@Injectable()
export class GetLevelUseCase implements IGetLevelUseCase {
  constructor(
    @Inject(LEVEL_TYPES.services.IGetLevelService)
    private levelService: IGetLevelService,
  ) {}

  async getById(id: string): Promise<LevelDomain> {
    return await this.levelService.getById(id);
  }
}
