import { LevelDomain } from 'src/level/domain/level.domain';

export interface ICreateLevelUseCase {
  create(product: LevelDomain): Promise<LevelDomain>;
}
