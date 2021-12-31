import { HttpStatus } from '@nestjs/common';

export default {
  type: 'object',
  properties: {
    statusCode: { type: 'number', example: HttpStatus.BAD_REQUEST },
    error_details: {
      type: 'string',
      example:
        'BadRequestException: Error creating level at CreateLevelService.create...',
    },
    message: {
      type: 'string',
      example: 'Error creating level',
    },
    timestamp: { type: 'string', example: '2019-01-01T00:00:00.000Z' },
    path: { type: 'string', example: '/levels/create' },
  },
};
