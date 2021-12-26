import { LevelDomain } from 'src/level/domain/level.domain';

export interface IGetLevelUseCase {
  getById(id: string): Promise<LevelDomain>;
}
