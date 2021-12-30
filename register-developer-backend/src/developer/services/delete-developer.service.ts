import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from '../domain/developer.entity';
import { IDeleteDeveloperService } from '../interfaces/services/delete-developer.service.interface';

@Injectable()
export class DeleteDeveloperService implements IDeleteDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async remove(id: string): Promise<{ deleted: boolean }> {
    const developer = await this.developerRepository.findOne({
      developer_uuid: id,
    });
    if (!developer) {
      throw new NotFoundException('Developer not found.');
    } else {
      await this.developerRepository.delete({ developer_uuid: id });
      return { deleted: true };
    }
  }
}
