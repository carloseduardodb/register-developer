import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { CreateDeveloperService } from './../../services/create-developer.service';
import { Developer } from '../../domain/developer.entity';
import { CreateLevelService } from '../../../level/services/create-level.service';
import { Level } from '../../../level/domain/level.entity';

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
  let createDeveloperService: CreateDeveloperService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateDeveloperService,
        {
          provide: getRepositoryToken(Developer),
          useValue: {
            save: jest.fn().mockResolvedValue(developerEntity[0]),
          },
        },
      ],
    }).compile();

    createDeveloperService = module.get<CreateDeveloperService>(
      CreateDeveloperService,
    );
  });

  it('should be defined', () => {
    expect(createDeveloperService).toBeDefined();
  });

  describe('create', () => {
    it('must save a developer successfully', async () => {
      const result = await createDeveloperService.create(developerEntity[0]);

      expect(result).toBe(developerEntity[0]);
    });
  });
});
