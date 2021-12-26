import { DeveloperDomain } from 'src/developer/domain/developer.domain';
import { DeveloperPaginationDomain } from '../../domain/developer-pagination.domain';

export interface IGetAllDeveloperUseCase {
  getAll(query: {
    take: number;
    page: number;
    skip: number;
    keyword: string;
  }): Promise<DeveloperPaginationDomain>;
}
