import { LevelDomain } from './level.domain';

export class LevelPaginationDomain {
  statusCode: string;
  data: LevelDomain[];
  count: any;
  currentPage: any;
  nextPage: any;
  prevPage: number;
  lastPage: number;
}
