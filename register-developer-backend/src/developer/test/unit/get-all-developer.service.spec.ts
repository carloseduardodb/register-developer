import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from '../../domain/developer.entity';
import { Level } from '../../../level/domain/level.entity';
import { GetAllDeveloperService } from '../../services/get-all-developer.service';

const levelEntity: Level[] = [
  new Level({
    level_id: 1,
    level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
    name: 'Level 1',
  }),
];

const developerEntityPaginate: any = [
  [
    new Developer({
      developer_id: 1,
      developer_uuid: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
      age: 20,
      birth_date: new Date(),
      hobby: '',
      gender: 'male',
      level: levelEntity[0],
      name: 'Carlos',
    }),
    new Developer({
      developer_id: 1,
      developer_uuid: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
      age: 20,
      birth_date: new Date(),
      hobby: '',
      gender: 'male',
      level: levelEntity[0],
      name: 'Carlos',
    }),
  ],
  2,
];

const developerEntity: any = [
  new Developer({
    developer_id: 1,
    developer_uuid: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
    age: 20,
    birth_date: new Date(),
    hobby: '',
    gender: 'male',
    level: levelEntity[0],
    name: 'Carlos',
  }),
  new Developer({
    developer_id: 1,
    developer_uuid: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
    age: 20,
    birth_date: new Date(),
    hobby: '',
    gender: 'male',
    level: levelEntity[0],
    name: 'Carlos',
  }),
];

describe('DevelopersService', () => {
  let getAllDeveloperService: GetAllDeveloperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllDeveloperService,
        {
          provide: getRepositoryToken(Developer),
          useValue: {
            findAndCount: jest.fn().mockResolvedValue(developerEntityPaginate),
          },
        },
      ],
    }).compile();

    getAllDeveloperService = module.get<GetAllDeveloperService>(
      GetAllDeveloperService,
    );
  });

  it('should be defined', () => {
    expect(getAllDeveloperService).toBeDefined();
  });

  describe('get all paginate', () => {
    it('must get all paginate developer successfully', async () => {
      const result = await getAllDeveloperService.getAll({
        take: 1,
        page: 1,
        skip: 0,
        keyword: '',
      });
      expect(result).toEqual({
        statusCode: 'success',
        data: developerEntity,
        count: 2,
        currentPage: 1,
        nextPage: null,
        prevPage: null,
        lastPage: 1,
      });
    });
  });
});
