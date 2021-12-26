import { Inject, Injectable } from '@nestjs/common';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { IDeleteDeveloperUseCase } from '../interfaces/usecase/delete-developer.usecase.interface';

@Injectable()
export class DeleteDeveloperUseCase implements IDeleteDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_TYPES.services.IDeleteDeveloperService)
    private developerService: IDeleteDeveloperUseCase,
  ) {}

  async remove(id: string): Promise<{ deleted: boolean }> {
    return await this.developerService.remove(id);
  }
}
