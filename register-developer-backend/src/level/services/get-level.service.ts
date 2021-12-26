import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelDomain } from '../domain/level.domain';
import { Level } from '../domain/level.entity';
import { IGetLevelService } from '../interfaces/services/get-level.service.interface';

@Injectable()
export class GetLevelService implements IGetLevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async getById(id: string): Promise<LevelDomain> {
    try {
      return await this.levelRepository.findOne({ level_uuid: id });
    } catch {
      throw new NotFoundException('Level ID is invalid');
    }
  }
}
