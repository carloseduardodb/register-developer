import { BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from '../domain/level.entity';
import { ICreateLevelService } from '../interfaces/services/create-level.service.interface';

export class CreateLevelService implements ICreateLevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async create(level: Level): Promise<Level> {
    try {
      return await this.levelRepository.save(level);
    } catch (error) {
      throw new BadRequestException('Error creating level');
    }
  }
}
