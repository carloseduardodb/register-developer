import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_TYPES } from '../interfaces/types';
import { IEditLevelUseCase } from '../interfaces/usecase/edit-level.usecase.interface';
import { IEditLevelService } from '../interfaces/services/edit-level.service.interface';
import { PartialLevel } from '../domain/partial-level.domain';
import { LevelDomain } from 'src/level/domain/level.domain';

@Injectable()
export class EditLevelUseCase implements IEditLevelUseCase {
  constructor(
    @Inject(LEVEL_TYPES.services.IEditLevelService)
    private levelService: IEditLevelService,
  ) {}

  async update(id: string, data: PartialLevel): Promise<LevelDomain> {
    return await this.levelService.update(id, data);
  }
}
