import { HttpStatus } from '@nestjs/common';

export default {
  type: 'object',
  properties: {
    statusCode: { type: 'number', example: HttpStatus.CREATED },
    message: {
      type: 'string',
      example: 'level.name successfully created',
    },
  },
};
