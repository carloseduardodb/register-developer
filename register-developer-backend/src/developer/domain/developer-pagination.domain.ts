import { DeveloperDomain } from './developer.domain';
export class DeveloperPaginationDomain {
  statusCode: string;
  data: DeveloperDomain[];
  count: any;
  currentPage: any;
  nextPage: any;
  prevPage: number;
  lastPage: number;
}
