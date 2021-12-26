import { LevelDomain } from 'src/level/domain/level.domain';

export interface IGetLevelService {
  getById(id: string): Promise<LevelDomain>;
}
