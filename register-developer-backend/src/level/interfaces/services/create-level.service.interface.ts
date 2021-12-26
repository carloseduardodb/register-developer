import { LevelDomain } from 'src/level/domain/level.domain';

export interface ICreateLevelService {
  create(level: LevelDomain): Promise<LevelDomain>;
}
