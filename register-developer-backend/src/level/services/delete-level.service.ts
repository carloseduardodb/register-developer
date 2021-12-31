import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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
    const level = await this.levelRepository.findOne({
      level_uuid: id,
    });
    if (!level) {
      throw new NotFoundException('Level not found.');
    } else {
      await this.levelRepository.delete({ level_uuid: id }).catch((error) => {
        throw new BadRequestException(error);
      });
      return { deleted: true };
    }
  }
}
