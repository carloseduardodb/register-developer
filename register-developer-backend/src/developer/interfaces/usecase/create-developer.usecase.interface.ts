import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface ICreateDeveloperUseCase {
  create(developer: DeveloperDomain): Promise<DeveloperDomain>;
}
