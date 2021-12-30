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
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import createDeveloperErrorSchema from '../schemas/create-developer-error.schema';
import createDeveloperSuccessSchema from '../schemas/create-developer-success.schema';
import findOneDeveloperErrorSchema from '../schemas/find-one-developer-error.schema';
import findAllDeveloperSuccessSchema from '../schemas/find-all-developer-success.schema';
import deleteDeveloperSuccessSchema from '../schemas/delete-developer-success.schema';
import deleteDeveloperErrorSchema from '../schemas/delete-developer-error.schema';
import updateDeveloperSuccessSchema from '../schemas/update-developer-success.schema';
import updateDeveloperErrorSchema from '../schemas/update-developer-error.schema';

@ApiTags('developers')
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

  // ---------------------------Created Developer-------------------------------

  // DOCUMENTATION
  @ApiCreatedResponse({
    description: 'Create a new developer.',
    schema: createDeveloperSuccessSchema,
  })
  @ApiBadRequestResponse({
    description: 'Error occurred when creating developer.',
    schema: createDeveloperErrorSchema,
  })
  @ApiBody({
    type: DeveloperDomain,
  })

  // DEFAULT
  @UsePipes(new ValidationPipe())
  @Post('/create')
  @UseFilters(new HttpExceptionFilter())
  async create(@Res() res, @Body() developerDomain: DeveloperDomain) {
    const developer = await this.createDeveloperApp.create(developerDomain);
    return res.status(HttpStatus.CREATED).json({
      statusCode: HttpStatus.CREATED,
      message: `${developer.name} successfully created`,
    });
  }

  // ---------------------------Get Developer-------------------------------

  // DOCUMENTATION
  @ApiQuery({
    name: 'uuid',
  })
  @ApiOkResponse({
    type: DeveloperDomain,
  })
  @ApiBadRequestResponse({
    description: 'Developer not found.',
    schema: findOneDeveloperErrorSchema,
  })

  // DEFAULT
  @Get(':uuid')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Res() res, @Param('uuid', new ParseUUIDPipe()) uuid) {
    const developer = await this.getDeveloperApp.getById(uuid);
    return res.status(HttpStatus.OK).json(developer);
  }

  // ---------------------------FindAll Developer-------------------------------

  // DOCUMENTATION
  @ApiOkResponse({
    description:
      'Consider that a data field will appear in the response with the data below',
    schema: findAllDeveloperSuccessSchema,
  })

  // DEFAULT
  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll(@Res() res, @Query() query: PartialDeveloperPaginationDomain) {
    const developers = await this.getAllDeveloper.getAll(query);
    return res.status(HttpStatus.OK).json(developers);
  }

  // ---------------------------Update Developer-------------------------------

  // DOCUMENTATION
  @ApiOkResponse({
    description: 'Developer with uuid',
    schema: updateDeveloperSuccessSchema,
  })
  @ApiNotFoundResponse({
    description: 'Developer not found.',
    schema: updateDeveloperErrorSchema,
  })

  // DEFAULT
  @UsePipes(new ValidationPipe())
  @Patch('/update/:uuid')
  @UseFilters(new HttpExceptionFilter())
  async update(
    @Res() res,
    @Param('uuid', new ParseUUIDPipe()) uuid: string,
    @Body() data: PartialDeveloper,
  ) {
    const updatedDeveloper = await this.editDeveloperApp.update(uuid, data);
    return res.status(HttpStatus.OK).json(updatedDeveloper);
  }

  // ---------------------------Delete Developer-------------------------------

  // DOCUMENTATION
  @ApiOkResponse({
    description: 'Delete developer based on uuid',
    schema: deleteDeveloperSuccessSchema,
  })
  @ApiNotFoundResponse({
    description: 'Developer not found.',
    schema: deleteDeveloperErrorSchema,
  })

  // DEFAULT
  @Delete('/delete/:uuid')
  @UseFilters(new HttpExceptionFilter())
  async remove(@Res() res, @Param('uuid', new ParseUUIDPipe()) uuid: string) {
    await this.deleteDeveloperApp.remove(uuid);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      message: 'Developer successfully deleted',
    });
  }
}
