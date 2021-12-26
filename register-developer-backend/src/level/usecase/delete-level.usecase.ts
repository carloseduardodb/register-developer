import { Inject, Injectable } from '@nestjs/common';
import { LEVEL_TYPES } from '../interfaces/types';
import { IDeleteLevelUseCase } from '../interfaces/usecase/delete-level.usecase.interface';

@Injectable()
export class DeleteLevelUseCase implements IDeleteLevelUseCase {
  constructor(
    @Inject(LEVEL_TYPES.services.IDeleteLevelService)
    private levelService: IDeleteLevelUseCase,
  ) {}

  async remove(id: string): Promise<{ deleted: boolean }> {
    return await this.levelService.remove(id);
  }
}
