import { LevelDomain } from './level.domain';

export class LevelPaginationDomain {
  statusCode: string;
  data: LevelDomain[];
  count: number;
  currentPage: number;
  nextPage: number;
  prevPage: number;
  lastPage: number;
}
