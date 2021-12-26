import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface IGetAllDeveloperService {
  getAll(): Promise<DeveloperDomain[]>;
}
