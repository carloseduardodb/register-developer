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

//DOCS imports
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger';
import createLevelErrorSchema from '../docs/create-level-error.schema';
import createLevelSuccessSchema from '../docs/create-level-success.schema';
import findOneLevelErrorSchema from '../docs/find-one-level-error.schema';
import findAllLevelSuccessSchema from '../docs/find-all-level-success.schema';
import deleteLevelSuccessSchema from '../docs/delete-level-success.schema';
import deleteLevelErrorSchema from '../docs/delete-level-error.schema';
import updateLevelSuccessSchema from '../docs/update-level-success.schema';
import updateLevelErrorSchema from '../docs/update-level-error.schema';

@ApiTags('levels')
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

  // Created Level-------------------------------

  // DOCUMENTATION
  @ApiCreatedResponse({
    description: 'Create a new level.',
    schema: createLevelSuccessSchema,
  })
  @ApiBadRequestResponse({
    description: 'Error occurred when creating level.',
    schema: createLevelErrorSchema,
  })
  @ApiBody({
    type: LevelDomain,
  })

  // DEFAULT
  @Post('/create')
  @UseFilters(new HttpExceptionFilter())
  async create(@Res() res, @Body() levelDomain: LevelDomain) {
    const level = await this.createLevelApp.create(levelDomain);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.CREATED,
      message: `${level.name} successfully created`,
    });
  }

  // Get Level-------------------------------

  // DOCUMENTATION
  @ApiQuery({
    name: 'uuid',
  })
  @ApiOkResponse({
    type: LevelDomain,
  })
  @ApiBadRequestResponse({
    description: 'Level not found.',
    schema: findOneLevelErrorSchema,
  })

  // DEFAULT
  @Get(':id')
  @UseFilters(new HttpExceptionFilter())
  async findOne(@Res() res, @Param('id', new ParseUUIDPipe()) id) {
    const level = await this.getLevelApp.getById(id);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: level,
    });
  }

  // FindAll Level-------------------------------

  // DOCUMENTATION
  @ApiOkResponse({
    description: 'Paginate all levels',
    schema: findAllLevelSuccessSchema,
  })

  // DEFAULT
  @Get()
  @UseFilters(new HttpExceptionFilter())
  async findAll(@Res() res, @Query() query: PartialLevelPaginationDomain) {
    const levels = await this.getAllLevel.getAll(query);
    return res.status(HttpStatus.OK).json({
      statusCode: HttpStatus.OK,
      data: levels,
    });
  }

  // Update Level-------------------------------

  // DOCUMENTATION
  @ApiOkResponse({
    description: 'Level with uuid',
    schema: updateLevelSuccessSchema,
  })
  @ApiBadRequestResponse({
    description: 'Level not found.',
  })
  @ApiNotFoundResponse({
    description: 'Level not found.',
    schema: updateLevelErrorSchema,
  })

  // DEFAULT
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

  // Delete Level-------------------------------

  // DOCUMENTATION
  @ApiOkResponse({
    description: 'Delete level based on uuid',
    schema: deleteLevelSuccessSchema,
  })
  @ApiBadRequestResponse({
    description: 'Bad request.',
  })
  @ApiNotFoundResponse({
    description: 'Level not found.',
    schema: deleteLevelErrorSchema,
  })

  // DEFAULT
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
