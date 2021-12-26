import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelDomain } from '../domain/level.domain';
import { Level } from '../domain/level.entity';
import { PartialLevel } from '../domain/partial-level.domain';
import { IEditLevelService } from '../interfaces/services/edit-level.service.interface';

@Injectable()
export class EditLevelService implements IEditLevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async update(id: string, data: PartialLevel): Promise<LevelDomain> {
    await this.levelRepository.update({ level_uuid: id }, data);
    return await this.levelRepository.findOne({ level_uuid: id });
  }
}
