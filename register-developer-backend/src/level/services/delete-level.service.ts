import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Level } from '../domain/level.entity';
import { IDeleteLevelService } from '../interfaces/services/delete-level.service.interface';

@Injectable()
export class DeleteLevelService implements IDeleteLevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async remove(id: string): Promise<{ deleted: boolean }> {
    await this.levelRepository.delete({ level_uuid: id });
    return { deleted: true };
  }
}
