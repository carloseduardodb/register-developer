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
  UseFilters,
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
import { HttpExceptionFilter } from '../../common/filters/http-exception.filter';

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
  @UseFilters(new HttpExceptionFilter())
  @Post('/create')
  async create(@Res() res, @Body() levelDomain: LevelDomain) {
    const level = await this.createLevelApp.create(levelDomain);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.CREATED,
      message: `${level.name} successfully created`,
    });
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
    const level = await this.getLevelApp.getById(id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: level,
    });
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll(@Res() res, @Query() query: PartialLevelPaginationDomain) {
    const levels = await this.getAllLevel.getAll(query);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: levels,
    });
  }

  @Patch('/update/:id')
  @UseFilters(new HttpExceptionFilter())
  async update(
    @Res() res,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: PartialLevel,
  ) {
    const updatedLevel = await this.editLevelApp.update(id, data);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: updatedLevel,
    });
  }

  @Delete('/delete/:id')
  @UseFilters(new HttpExceptionFilter())
  async remove(@Res() res, @Param('id', new ParseUUIDPipe()) id: string) {
    await this.deleteLevelApp.remove(id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Level successfully deleted',
    });
  }
}
