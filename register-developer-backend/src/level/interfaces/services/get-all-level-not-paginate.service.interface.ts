import { LevelDomain } from '../../domain/level.domain';

export interface IGetAllLevelNotPaginateService {
  getAllNotPaginate(): Promise<LevelDomain[]>;
}
