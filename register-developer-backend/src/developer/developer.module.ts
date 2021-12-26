import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DevelopersController } from './controller/developers.controller';
import { Developer } from './domain/developer.entity';
import { DEVELOPER_TYPES } from './interfaces/types';
import { DeleteDeveloperService } from './services/delete-developer.service';
import { EditDeveloperService } from './services/edit-developer.service';
import { GetAllDeveloperService } from './services/get-all-developer.service';
import { GetDeveloperService } from './services/get-developer.service';
import { CreateDeveloperService } from './services/create-developer.service';
import { DeleteDeveloperUseCase } from './usecase/delete-developer.usecase';
import { EditDeveloperUseCase } from './usecase/edit-developer.usecase';
import { GetDeveloperUseCase } from './usecase/get-developer.usecase';
import { CreateDeveloperUseCase } from './usecase/create-developer.usecase';
import { GetAllDeveloperUseCase } from './usecase/get-all.developer.usecase';

const createDeveloperApp = {
  provide: DEVELOPER_TYPES.usecases.ICreateDeveloperUseCase,
  useClass: CreateDeveloperUseCase,
};
const getDeveloperApp = {
  provide: DEVELOPER_TYPES.usecases.IGetDeveloperUseCase,
  useClass: GetDeveloperUseCase,
};
const getAllDeveloperApp = {
  provide: DEVELOPER_TYPES.usecases.IGetAllDeveloperUseCase,
  useClass: GetAllDeveloperUseCase,
};
const editDeveloperApp = {
  provide: DEVELOPER_TYPES.usecases.IEditDeveloperUseCase,
  useClass: EditDeveloperUseCase,
};
const deleteDeveloperApp = {
  provide: DEVELOPER_TYPES.usecases.IDeleteDeveloperUseCase,
  useClass: DeleteDeveloperUseCase,
};

const createDeveloperService = {
  provide: DEVELOPER_TYPES.services.ICreateDeveloperService,
  useClass: CreateDeveloperService,
};
const getDeveloperService = {
  provide: DEVELOPER_TYPES.services.IGetDeveloperService,
  useClass: GetDeveloperService,
};
const getAllDeveloperService = {
  provide: DEVELOPER_TYPES.services.IGetAllDeveloperService,
  useClass: GetAllDeveloperService,
};
const editDeveloperService = {
  provide: DEVELOPER_TYPES.services.IEditDeveloperService,
  useClass: EditDeveloperService,
};
const deleteDeveloperService = {
  provide: DEVELOPER_TYPES.services.IDeleteDeveloperService,
  useClass: DeleteDeveloperService,
};

@Module({
  imports: [TypeOrmModule.forFeature([Developer])],
  controllers: [DevelopersController],
  providers: [
    createDeveloperApp,
    getDeveloperApp,
    getAllDeveloperApp,
    editDeveloperApp,
    deleteDeveloperApp,
    createDeveloperService,
    getDeveloperService,
    getAllDeveloperService,
    editDeveloperService,
    deleteDeveloperService,
  ],
})
export class DevelopersModule {}
