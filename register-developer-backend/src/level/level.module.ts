import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LevelsController } from './controller/levels.controller';
import { Level } from './domain/level.entity';
import { LEVEL_TYPES } from './interfaces/types';
import { DeleteLevelService } from './services/delete-level.service';
import { EditLevelService } from './services/edit-level.service';
import { GetAllLevelService } from './services/get-all-level.service';
import { GetLevelService } from './services/get-level.service';
import { CreateLevelService } from './services/create-level.service';
import { DeleteLevelUseCase } from './usecase/delete-level.usecase';
import { EditLevelUseCase } from './usecase/edit-level.usecase';
import { GetLevelUseCase } from './usecase/get-level.usecase';
import { CreateLevelUseCase } from './usecase/create-level.usecase';
import { GetAllLevelUseCase } from './usecase/get-all.level.usecase';
import { GetAllLevelNotPaginateUseCase } from './usecase/get-all-level-not-paginate.usecase';
import { GetAllLevelNotPaginateService } from './services/get-all-level-not-paginate.service';

const createLevelApp = {
  provide: LEVEL_TYPES.usecases.ICreateLevelUseCase,
  useClass: CreateLevelUseCase,
};
const getLevelApp = {
  provide: LEVEL_TYPES.usecases.IGetLevelUseCase,
  useClass: GetLevelUseCase,
};
const getAllLevelApp = {
  provide: LEVEL_TYPES.usecases.IGetAllLevelUseCase,
  useClass: GetAllLevelUseCase,
};
const editLevelApp = {
  provide: LEVEL_TYPES.usecases.IEditLevelUseCase,
  useClass: EditLevelUseCase,
};
const deleteLevelApp = {
  provide: LEVEL_TYPES.usecases.IDeleteLevelUseCase,
  useClass: DeleteLevelUseCase,
};

const getAllLevelNotPaginateApp = {
  provide: LEVEL_TYPES.usecases.IGetAllLevelNotPaginatedUseCase,
  useClass: GetAllLevelNotPaginateUseCase,
};

const getAllLevelNotPaginate = {
  provide: LEVEL_TYPES.usecases.IGetAllLevelNotPaginatedUseCase,
  useClass: GetAllLevelNotPaginateService,
};

const createLevelService = {
  provide: LEVEL_TYPES.services.ICreateLevelService,
  useClass: CreateLevelService,
};
const getLevelService = {
  provide: LEVEL_TYPES.services.IGetLevelService,
  useClass: GetLevelService,
};
const getAllLevelService = {
  provide: LEVEL_TYPES.services.IGetAllLevelService,
  useClass: GetAllLevelService,
};
const editLevelService = {
  provide: LEVEL_TYPES.services.IEditLevelService,
  useClass: EditLevelService,
};
const deleteLevelService = {
  provide: LEVEL_TYPES.services.IDeleteLevelService,
  useClass: DeleteLevelService,
};

@Module({
  imports: [TypeOrmModule.forFeature([Level])],
  controllers: [LevelsController],
  providers: [
    createLevelApp,
    getLevelApp,
    getAllLevelApp,
    getAllLevelNotPaginateApp,
    editLevelApp,
    deleteLevelApp,
    createLevelService,
    getLevelService,
    getAllLevelService,
    editLevelService,
    deleteLevelService,
    getAllLevelNotPaginate,
  ],
})
export class LevelsModule {}
