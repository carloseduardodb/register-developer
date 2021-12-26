import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface IGetDeveloperService {
  getById(id: string): Promise<DeveloperDomain>;
}
