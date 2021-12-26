import { DeveloperPaginationDomain } from '../../domain/developer-pagination.domain';

export interface IGetAllDeveloperService {
  getAll(query: {
    take: number;
    page: number;
    skip: number;
    keyword: string;
  }): Promise<DeveloperPaginationDomain>;
}
