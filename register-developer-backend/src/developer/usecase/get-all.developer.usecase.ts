import { Inject, Injectable } from '@nestjs/common';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { IGetAllDeveloperUseCase } from '../interfaces/usecase/get-all-developer.usecase.interface';
import { IGetAllDeveloperService } from '../interfaces/services/get-all-developer.service.interface';
import { DeveloperPaginationDomain } from '../domain/developer-pagination.domain';

@Injectable()
export class GetAllDeveloperUseCase implements IGetAllDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_TYPES.services.IGetAllDeveloperService)
    private productService: IGetAllDeveloperService,
  ) {}

  async getAll(query: {
    take: number;
    page: number;
    skip: number;
    keyword: string;
  }): Promise<DeveloperPaginationDomain> {
    return await this.productService.getAll(query);
  }
}
