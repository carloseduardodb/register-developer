import { Inject, Injectable } from '@nestjs/common';
import { DeveloperDomain } from '../domain/developer.domain';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { ICreateDeveloperUseCase } from '../interfaces/usecase/create-developer.usecase.interface';
import { ICreateDeveloperService } from '../interfaces/services/create-developer.service.interface';

@Injectable()
export class CreateDeveloperUseCase implements ICreateDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_TYPES.services.ICreateDeveloperService)
    private developerService: ICreateDeveloperService,
  ) {}

  async create(developer: DeveloperDomain): Promise<DeveloperDomain> {
    return await this.developerService.create(developer);
  }
}
