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
import { DeveloperDomain } from '../domain/developer.domain';
import { DEVELOPER_TYPES } from '../interfaces/types';
import { ICreateDeveloperUseCase } from '../interfaces/usecase/create-developer.usecase.interface';
import { IGetDeveloperUseCase } from '../interfaces/usecase/get-developer.usecase.interface';
import { IEditDeveloperUseCase } from '../interfaces/usecase/edit-developer.usecase.interface';
import { IDeleteDeveloperUseCase } from '../interfaces/usecase/delete-developer.usecase.interface';
import { IGetAllDeveloperUseCase } from '../interfaces/usecase/get-all-developer.usecase.interface';
import { PartialDeveloper } from '../domain/partial-developer.domain';
import { HttpExceptionFilter } from 'src/common/filters/http-exception.filter';
import { PartialDeveloperPaginationDomain } from '../domain/partial-developer-pagination.domain';

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
  @UseFilters(new HttpExceptionFilter())
  async create(@Res() res, @Body() developerDomain: DeveloperDomain) {
    const developer = await this.createDeveloperApp.create(developerDomain);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.CREATED,
      message: `${developer.name} successfully created`,
    });
  }

  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
    const developer = await this.getDeveloperApp.getById(id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: developer,
    });
  }

  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll(@Res() res, @Query() query: PartialDeveloperPaginationDomain) {
    const developers = await this.getAllDeveloper.getAll(query);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: developers,
    });
  }

  @UsePipes(new ValidationPipe())
  @Patch('/update/:id')
  @UseFilters(new HttpExceptionFilter())
  async update(
    @Res() res,
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() data: PartialDeveloper,
  ) {
    const updatedDeveloper = await this.editDeveloperApp.update(id, data);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: updatedDeveloper,
    });
  }

  @Delete('/delete/:id')
  @UseFilters(new HttpExceptionFilter())
  async remove(@Res() res, @Param('id', new ParseUUIDPipe()) id: string) {
    await this.deleteDeveloperApp.remove(id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Developer successfully deleted',
    });
  }
}
