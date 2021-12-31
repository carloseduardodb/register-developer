import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Level } from '../../../level/domain/level.entity';
import { DeleteLevelService } from '../../services/delete-level.service';
import { EditLevelService } from '../../services/edit-level.service';

const levelEntity: Level[] = [
  new Level({
    level_id: 1,
    level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
    name: 'Level 1',
  }),
];

describe('LevelsService', () => {
  let editLevelService: EditLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        EditLevelService,
        {
          provide: getRepositoryToken(Level),
          useValue: {
            findOne: jest.fn().mockResolvedValue(levelEntity[0]),
            update: jest.fn().mockResolvedValue(levelEntity[0]),
          },
        },
      ],
    }).compile();

    editLevelService = module.get<EditLevelService>(EditLevelService);
  });

  it('should be defined', () => {
    expect(editLevelService).toBeDefined();
  });

  describe('edit', () => {
    it('must edit a level successfully', async () => {
      const result = await editLevelService.update(
        '6795b984-2e43-42d4-ac5b-1185280ed1e3',
        {
          name: 'Senior Nada1',
        },
      );
      expect(result).toEqual(levelEntity[0]);
    });
  });
});
