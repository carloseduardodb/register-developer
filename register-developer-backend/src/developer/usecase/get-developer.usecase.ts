import { Inject, Injectable } from '@nestjs/common';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { IGetDeveloperUseCase } from '../interfaces/usecase/get-developer.usecase.interface';
import { DeveloperDomain } from 'src/developer/domain/developer.domain';
import { IGetDeveloperService } from '../interfaces/services/get-developer.service.interface';

@Injectable()
export class GetDeveloperUseCase implements IGetDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_TYPES.services.IGetDeveloperService)
    private developerService: IGetDeveloperService,
  ) {}

  async getById(id: string): Promise<DeveloperDomain> {
    return await this.developerService.getById(id);
  }
}
