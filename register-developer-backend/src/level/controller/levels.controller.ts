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
  Query,
  Res,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { LevelDomain } from '../domain/level.domain';
import { LEVEL_TYPES } from '../interfaces/types';
import { ICreateLevelUseCase } from '../interfaces/usecase/create-level.usecase.interface';
import { IGetLevelUseCase } from '../interfaces/usecase/get-level.usecase.interface';
import { IEditLevelUseCase } from '../interfaces/usecase/edit-level.usecase.interface';
import { IDeleteLevelUseCase } from '../interfaces/usecase/delete-level.usecase.interface';
import { IGetAllLevelUseCase } from '../interfaces/usecase/get-all-level.usecase.interface';
import { PartialLevel } from '../domain/partial-level.domain';
import { PartialLevelPaginationDomain } from '../domain/partial-level-pagination.domain';

@Controller('levels')
export class LevelsController {
  constructor(
    @Inject(LEVEL_TYPES.usecases.ICreateLevelUseCase)
    private createLevelApp: ICreateLevelUseCase,
    @Inject(LEVEL_TYPES.usecases.IGetLevelUseCase)
    private getLevelApp: IGetLevelUseCase,
    @Inject(LEVEL_TYPES.usecases.IGetAllLevelUseCase)
    private getAllLevel: IGetAllLevelUseCase,
    @Inject(LEVEL_TYPES.usecases.IEditLevelUseCase)
    private editLevelApp: IEditLevelUseCase,
    @Inject(LEVEL_TYPES.usecases.IDeleteLevelUseCase)
    private deleteLevelApp: IDeleteLevelUseCase,
  ) {}

  @UsePipes(new ValidationPipe())
  @Post('/create')
  async create(@Res() res, @Body() levelDomain: LevelDomain) {
    try {
      const level = await this.createLevelApp.create(levelDomain);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.CREATED,
        message: `${level.name} successfully created`,
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
      const level = await this.getLevelApp.getById(id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: level,
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }

  @Get()
  async findAll(@Res() res, @Query() query: PartialLevelPaginationDomain) {
    try {
      const levels = await this.getAllLevel.getAll(query);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: levels,
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
    @Body() data: PartialLevel,
  ) {
    const updatedLevel = await this.editLevelApp.update(id, data);

    if (updatedLevel) {
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        data: updatedLevel,
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
      await this.deleteLevelApp.remove(id);
      return res.status(HttpStatus.OK).json({
        statusCode: HttpStatus.OK,
        message: 'Level successfully deleted',
      });
    } catch (err) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: err,
      });
    }
  }
}
