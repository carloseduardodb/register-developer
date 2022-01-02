import { LevelDomain } from '../../domain/level.domain';

export interface IGetAllLevelNotPaginateUseCase {
  getAllNotPaginate(): Promise<LevelDomain[]>;
}
