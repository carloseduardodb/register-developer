import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeveloperDomain } from '../domain/developer.domain';
import { Developer } from '../domain/developer.entity';
import { IGetAllDeveloperService } from '../interfaces/services/get-all-developer.service.interface';

@Injectable()
export class GetAllDeveloperService implements IGetAllDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async getAll(): Promise<DeveloperDomain[]> {
    return await this.developerRepository.find({ relations: ['level'] });
  }
}
