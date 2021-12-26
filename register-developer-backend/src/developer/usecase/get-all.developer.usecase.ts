import { Inject, Injectable } from '@nestjs/common';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { IGetAllDeveloperUseCase } from '../interfaces/usecase/get-all-developer.usecase.interface';
import { IGetAllDeveloperService } from '../interfaces/services/get-all-developer.service.interface';
import { DeveloperDomain } from 'src/developer/domain/developer.domain';

@Injectable()
export class GetAllDeveloperUseCase implements IGetAllDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_TYPES.services.IGetAllDeveloperService)
    private productService: IGetAllDeveloperService,
  ) {}

  async getAll(): Promise<DeveloperDomain[]> {
    return await this.productService.getAll();
  }
}
