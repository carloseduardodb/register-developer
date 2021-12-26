import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository } from 'typeorm';
import { Developer } from '../domain/developer.entity';
import { IDeleteDeveloperService } from '../interfaces/services/delete-developer.service.interface';

@Injectable()
export class DeleteDeveloperService implements IDeleteDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async remove(id: string): Promise<{ deleted: boolean }> {
    await this.developerRepository.delete({ developer_uuid: id });
    return { deleted: true };
  }
}
