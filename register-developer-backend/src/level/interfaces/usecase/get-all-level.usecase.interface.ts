import { LevelDomain } from 'src/level/domain/level.domain';

export interface IGetAllLevelUseCase {
  getAll(): Promise<LevelDomain[]>;
}
