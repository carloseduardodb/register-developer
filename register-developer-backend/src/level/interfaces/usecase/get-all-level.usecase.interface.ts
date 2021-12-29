import { LevelDomain } from 'src/level/domain/level.domain';
import { LevelPaginationDomain } from '../../domain/level-pagination.domain';

export interface IGetAllLevelUseCase {
  getAll(query: {
    take: number;
    page: number;
    skip: number;
    keyword: string;
  }): Promise<LevelPaginationDomain>;
}
