import { Inject, Injectable } from '@nestjs/common';
import { LevelDomain } from '../domain/level.domain';
import { LEVEL_TYPES } from '../interfaces/types';
import { ICreateLevelUseCase } from '../interfaces/usecase/create-level.usecase.interface';
import { ICreateLevelService } from '../interfaces/services/create-level.service.interface';

@Injectable()
export class CreateLevelUseCase implements ICreateLevelUseCase {
  constructor(
    @Inject(LEVEL_TYPES.services.ICreateLevelService)
    private levelService: ICreateLevelService,
  ) {}

  async create(level: LevelDomain): Promise<LevelDomain> {
    return await this.levelService.create(level);
  }
}
