import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface IGetDeveloperUseCase {
  getById(id: string): Promise<DeveloperDomain>;
}
