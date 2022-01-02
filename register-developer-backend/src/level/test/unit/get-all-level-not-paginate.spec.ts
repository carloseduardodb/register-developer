import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken, TypeOrmModule } from '@nestjs/typeorm';
import { Level } from '../../../level/domain/level.entity';
import { GetAllLevelNotPaginateService } from '../../services/get-all-level-not-paginate.service';

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
  let getAllLevelNotPaginateService: GetAllLevelNotPaginateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        GetAllLevelNotPaginateService,
        {
          provide: getRepositoryToken(Level),
          useValue: {
            find: jest.fn().mockResolvedValue(levelEntity),
          },
        },
      ],
    }).compile();

    getAllLevelNotPaginateService = module.get<GetAllLevelNotPaginateService>(
      GetAllLevelNotPaginateService,
    );
  });

  it('should be defined', () => {
    expect(getAllLevelNotPaginateService).toBeDefined();
  });

  describe('get all level not paginate', () => {
    it('must get all developer successfully', async () => {
      const result = await getAllLevelNotPaginateService.getAllNotPaginate();
      expect(result).toEqual(levelEntity);
    });
  });
});
