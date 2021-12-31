import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { CreateLevelService } from '../../../level/services/create-level.service';
import { Level } from '../../../level/domain/level.entity';

const levelEntity: Level[] = [
  new Level({
    level_id: 1,
    level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
    name: 'Level 1',
  }),
];

describe('LevelsService', () => {
  let createLevelService: CreateLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateLevelService,
        {
          provide: getRepositoryToken(Level),
          useValue: {
            save: jest.fn().mockResolvedValue(levelEntity[0]),
          },
        },
      ],
    }).compile();

    createLevelService = module.get<CreateLevelService>(CreateLevelService);
  });

  it('should be defined', () => {
    expect(createLevelService).toBeDefined();
  });

  describe('create', () => {
    it('must save a level successfully', async () => {
      const dataLevel: Level | any = {
        level_id: 1,
        level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
        name: 'Level 1',
      };
      const result = await createLevelService.create(dataLevel);
      expect(result).toBe(levelEntity[0]);
    });
  });
});
