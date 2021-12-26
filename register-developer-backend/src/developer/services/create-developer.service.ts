import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Developer } from '../domain/developer.entity';
import { ICreateDeveloperService } from '../interfaces/services/create-developer.service.interface';

export class CreateDeveloperService implements ICreateDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async create(developer: Developer): Promise<Developer> {
    return await this.developerRepository.save(developer);
  }
}
