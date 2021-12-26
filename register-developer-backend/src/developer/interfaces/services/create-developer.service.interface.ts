import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface ICreateDeveloperService {
  create(developer: DeveloperDomain): Promise<DeveloperDomain>;
}
