import { PartialLevel } from 'src/level/domain/partial-level.domain';
import { LevelDomain } from 'src/level/domain/level.domain';

export interface IEditLevelService {
  update(id: string, data: PartialLevel): Promise<LevelDomain>;
}
