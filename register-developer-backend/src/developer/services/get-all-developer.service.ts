import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Developer } from '../domain/developer.entity';
import { IGetAllDeveloperService } from '../interfaces/services/get-all-developer.service.interface';
import { paginateResponse } from '../../common/functions/paginate-response';
import { DeveloperPaginationDomain } from '../domain/developer-pagination.domain';
import { PartialDeveloperPaginationDomain } from '../domain/partial-developer-pagination.domain';

@Injectable()
export class GetAllDeveloperService implements IGetAllDeveloperService {
  constructor(
    @InjectRepository(Developer)
    private developerRepository: Repository<Developer>,
  ) {}

  async getAll(
    query: PartialDeveloperPaginationDomain,
  ): Promise<DeveloperPaginationDomain> {
    const take = query.take || 10;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    const keyword = query.keyword || '';

    const data = await this.developerRepository.findAndCount({
      where: { name: Like('%' + keyword + '%') },
      order: { name: 'DESC' },
      take: take,
      skip: skip,
      relations: ['level'],
    });

    return paginateResponse(data, page);
  }
}
