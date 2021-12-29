import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DeveloperDomain } from '../domain/developer.domain';
import { Developer } from '../domain/developer.entity';
import { PartialDeveloper } from '../domain/partial-developer.domain';
import { IEditDeveloperService } from '../interfaces/services/edit-developer.service.interface';

@Injectable()
export class EditDeveloperService implements IEditDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async update(id: string, data: PartialDeveloper): Promise<DeveloperDomain> {
    try {
      await this.developerRepository.update({ developer_uuid: id }, data);
      return await this.developerRepository.findOne({ developer_uuid: id });
    } catch (error) {
      throw new BadRequestException('Error updating developer');
    }
  }
}
