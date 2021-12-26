import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface ICreateDeveloperUseCase {
  create(product: DeveloperDomain): Promise<DeveloperDomain>;
}
