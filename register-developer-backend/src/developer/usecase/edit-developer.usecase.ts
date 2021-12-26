import { Inject, Injectable } from '@nestjs/common';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { IEditDeveloperUseCase } from '../interfaces/usecase/edit-developer.usecase.interface';
import { IEditDeveloperService } from '../interfaces/services/edit-developer.service.interface';
import { PartialDeveloper } from '../domain/partial-developer.domain';
import { DeveloperDomain } from 'src/developer/domain/developer.domain';

@Injectable()
export class EditDeveloperUseCase implements IEditDeveloperUseCase {
  constructor(
    @Inject(DEVELOPER_TYPES.services.IEditDeveloperService)
    private productService: IEditDeveloperService,
  ) {}

  async update(id: string, data: PartialDeveloper): Promise<DeveloperDomain> {
    return await this.productService.update(id, data);
  }
}
