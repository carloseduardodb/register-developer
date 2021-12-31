import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Level } from '../../../level/domain/level.entity';
import { DeleteLevelService } from '../../services/delete-level.service';

const levelEntity: Level[] = [
  new Level({
    level_id: 1,
    level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
    name: 'Level 1',
  }),
];

describe('LevelsService', () => {
  let deleteLevelService: DeleteLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        DeleteLevelService,
        {
          provide: getRepositoryToken(Level),
          useValue: {
            findOne: jest.fn().mockResolvedValue(levelEntity[0]),
            delete: jest.fn().mockResolvedValue(levelEntity[0]),
          },
        },
      ],
    }).compile();

    deleteLevelService = module.get<DeleteLevelService>(DeleteLevelService);
  });

  it('should be defined', () => {
    expect(deleteLevelService).toBeDefined();
  });

  describe('delete', () => {
    it('must delete a level successfully', async () => {
      const result = await deleteLevelService.remove(
        '6795b984-2e43-42d4-ac5b-1185280ed1e3',
      );
      expect(result).toEqual({ deleted: true });
    });
  });
});
