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
    const developer = await this.developerRepository.findOne({
      developer_uuid: id,
    });

    if (!developer) {
      throw new NotFoundException(`Developer with id ${id} not found`);
    }
    return developer;
  }
}
