import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { Level } from '../domain/level.entity';
import { IGetAllLevelService } from '../interfaces/services/get-all-level.service.interface';
import { LevelPaginationDomain } from '../domain/level-pagination.domain';
import { paginateResponse } from '../../common/functions/paginate-response';

@Injectable()
export class GetAllLevelService implements IGetAllLevelService {
  constructor(
    @InjectRepository(Level)
    private levelRepository: Repository<Level>,
  ) {}

  async getAll(query: {
    take: number;
    page: number;
    skip: number;
    keyword: string;
  }): Promise<LevelPaginationDomain> {
    const take = query.take || 10;
    const page = query.page || 1;
    const skip = (page - 1) * take;
    const keyword = query.keyword || '';

    try {
      const data = await this.levelRepository.findAndCount({
        where: { name: Like('%' + keyword + '%') },
        order: { name: 'DESC' },
        take: take,
        skip: skip,
        relations: ['developers'],
      });

      return paginateResponse(data, page);
    } catch (error) {
      throw new BadRequestException('Error getting all levels');
    }
  }
}
