import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Level } from '../../../level/domain/level.entity';
import { EditLevelService } from '../../services/edit-level.service';
import { GetLevelService } from '../../services/get-level.service';

const levelEntity: Level[] = [
  new Level({
    level_id: 1,
    level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
    name: 'Level 1',
  }),
];

describe('LevelsService', () => {
  let getLevelService: GetLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetLevelService,
        {
          provide: getRepositoryToken(Level),
          useValue: {
            findOne: jest.fn().mockResolvedValue(levelEntity[0]),
          },
        },
      ],
    }).compile();

    getLevelService = module.get<GetLevelService>(GetLevelService);
  });

  it('should be defined', () => {
    expect(getLevelService).toBeDefined();
  });

  describe('get', () => {
    it('must get a developer successfully', async () => {
      const result = await getLevelService.getById(
        '6795b984-2e43-42d4-ac5b-1185280ed1e3',
      );
      expect(result).toEqual(levelEntity[0]);
    });
  });
});
