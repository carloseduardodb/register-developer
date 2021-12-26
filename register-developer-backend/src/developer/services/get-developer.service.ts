import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeveloperDomain } from '../domain/developer.domain';
import { Developer } from '../domain/developer.entity';
import { IGetDeveloperService } from '../interfaces/services/get-developer.service.interface';

@Injectable()
export class GetDeveloperService implements IGetDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async getById(id: string): Promise<DeveloperDomain> {
    try {
      return await this.developerRepository.findOne({ developer_uuid: id });
    } catch {
      throw new NotFoundException('Developer ID is invalid');
    }
  }
}
