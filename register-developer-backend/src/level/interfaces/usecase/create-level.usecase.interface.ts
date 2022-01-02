import { LevelDomain } from 'src/level/domain/level.domain';

export interface ICreateLevelUseCase {
  create(level: LevelDomain): Promise<LevelDomain>;
}
