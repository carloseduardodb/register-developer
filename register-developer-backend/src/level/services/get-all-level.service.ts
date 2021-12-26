import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LevelDomain } from '../domain/level.domain';
import { Level } from '../domain/level.entity';
import { IGetAllLevelService } from '../interfaces/services/get-all-level.service.interface';

@Injectable()
export class GetAllLevelService implements IGetAllLevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async getAll(): Promise<LevelDomain[]> {
    return await this.levelRepository.find();
  }
}
