import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Level } from '../../../level/domain/level.entity';
import { EditLevelService } from '../../services/edit-level.service';
import { GetAllLevelService } from '../../services/get-all-level.service';

const levelEntity: any = [
  [
    new Level({
      level_id: 1,
      level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e3',
      name: 'Level 1',
      developers: [],
    }),
    new Level({
      level_id: 2,
      level_uuid: '6795b984-2e43-42d4-ac5b-1185280ed1e4',
      name: 'Level 2',
      developers: [],
    }),
  ],
  2,
];

describe('LevelsService', () => {
  let getAllLevelService: GetAllLevelService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllLevelService,
        {
          provide: getRepositoryToken(Level),
          useValue: {
            findAndCount: jest.fn().mockResolvedValue(levelEntity),
          },
        },
      ],
    }).compile();

    getAllLevelService = module.get<GetAllLevelService>(GetAllLevelService);
  });

  it('should be defined', () => {
    expect(getAllLevelService).toBeDefined();
  });

  describe('get all paginate', () => {
    it('must get all paginate developer successfully', async () => {
      const result = await getAllLevelService.getAll({
        take: 1,
        page: 1,
        skip: 0,
        keyword: '',
      });
      expect(result).toEqual({
        statusCode: 'success',
        data: levelEntity[0],
        count: 2,
        currentPage: 1,
        nextPage: null,
        prevPage: null,
        lastPage: 1,
      });
    });
  });
});
