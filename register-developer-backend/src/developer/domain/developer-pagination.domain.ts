import { DeveloperDomain } from './developer.domain';
export class DeveloperPaginationDomain {
  statusCode: string;
  data: DeveloperDomain[];
  count: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
