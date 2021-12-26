import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Inject,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { DeveloperDomain } from '../domain/developer.domain';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { ICreateDeveloperUseCase } from '../interfaces/usecase/create-developer.usecase.interface';
import { IGetDeveloperUseCase } from '../interfaces/usecase/get-developer.usecase.interface';
import { IEditDeveloperUseCase } from '../interfaces/usecase/edit-developer.usecase.interface';
import { IDeleteDeveloperUseCase } from '../interfaces/usecase/delete-developer.usecase.interface';
import { IGetAllDeveloperUseCase } from '../interfaces/usecase/get-all-developer.usecase.interface';
import { PartialDeveloper } from '../domain/partial-developer.domain';

@Controller('developers')
export class DevelopersController {
  constructor(
    @Inject(DEVELOPER_TYPES.usecases.ICreateDeveloperUseCase)
    private createDeveloperApp: ICreateDeveloperUseCase,
    @Inject(DEVELOPER_TYPES.usecases.IGetDeveloperUseCase)
    private getDeveloperApp: IGetDeveloperUseCase,
    @Inject(DEVELOPER_TYPES.usecases.IGetAllDeveloperUseCase)
    private getAllDeveloper: IGetAllDeveloperUseCase,
    @Inject(DEVELOPER_TYPES.usecases.IEditDeveloperUseCase)
    private editDeveloperApp: IEditDeveloperUseCase,
    @Inject(DEVELOPER_TYPES.usecases.IDeleteDeveloperUseCase)
    private deleteDeveloperApp: IDeleteDeveloperUseCase,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('/create')
  async create(@Res() res, @Body() developerDomain: DeveloperDomain) {
    try {
      const developer = await this.createDeveloperApp.create(developerDomain);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.CREATED,
        message: `${developer.name} successfully created`,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }

  @Get(':id')
  async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
    try {
      const developer = await this.getDeveloperApp.getById(id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: developer,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }

  @Get()
  async findAll(@Res() res) {
    try {
      const developers = await this.getAllDeveloper.getAll();
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: developers,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }

  @UsePipes(new ValidationPipe())
  @Patch('/update/:id')
  async update(
    @Res() res,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: PartialDeveloper,
  ) {
    const updatedDeveloper = await this.editDeveloperApp.update(id, data);

    if (updatedDeveloper) {
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: updatedDeveloper,
      });
    } else {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Invalid input type',
      });
    }
  }

  @Delete('/delete/:id')
  async remove(@Res() res, @Param('id', new ParseUUIDPipe()) id: string) {
    try {
      await this.deleteDeveloperApp.remove(id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Developer successfully deleted',
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }
}
