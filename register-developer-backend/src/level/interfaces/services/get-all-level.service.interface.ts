import { LevelDomain } from 'src/level/domain/level.domain';

export interface IGetAllLevelService {
  getAll(): Promise<LevelDomain[]>;
}
