import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Developer } from '../../domain/developer.entity';
import { CreateLevelService } from '../../../level/services/create-level.service';
import { Level } from '../../../level/domain/level.entity';
import { GetDeveloperService } from '../../services/get-developer.service';

const levelEntity: Level[] = [
  new Level({
    level_id: 1,
    level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
    name: 'Level 1',
  }),
];

const developerEntity: Developer[] = [
  new Developer({
    developer_id: 1,
    developer_uuid: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
    age: 20,
    birth_date: new Date(),
    hobby: '',
    gender: 'male',
    level: levelEntity[1],
    name: 'Carlos',
  }),
];

describe('DevelopersService', () => {
  let getDeveloperService: GetDeveloperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetDeveloperService,
        {
          provide: getRepositoryToken(Developer),
          useValue: {
            findOne: jest.fn().mockResolvedValue(developerEntity[0]),
          },
        },
      ],
    }).compile();

    getDeveloperService = module.get<GetDeveloperService>(GetDeveloperService);
  });

  it('should be defined', () => {
    expect(getDeveloperService).toBeDefined();
  });

  describe('getDeveloper', () => {
    it('should return developer', async () => {
      const developer = await getDeveloperService.getById(
        'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
      );
      expect(developer).toEqual(developerEntity[0]);
    });
  });
});
