import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface IGetAllDeveloperUseCase {
  getAll(): Promise<DeveloperDomain[]>;
}
