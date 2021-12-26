import { PartialDeveloper } from 'src/developer/domain/partial-developer.domain';
import { DeveloperDomain } from 'src/developer/domain/developer.domain';

export interface IEditDeveloperUseCase {
  update(id: string, data: PartialDeveloper): Promise<DeveloperDomain>;
}
