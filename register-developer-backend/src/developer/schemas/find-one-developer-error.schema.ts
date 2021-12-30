import { HttpStatus } from '@nestjs/common';

export default {
  type: 'object',
  properties: {
    statusCode: { type: 'number', example: HttpStatus.NOT_FOUND },
    error_details: {
      type: 'string',
      example: '"NotFoundException: Developer with id :uuid ...',
    },
    message: {
      type: 'string',
      example: 'Developer with id :uuid not found',
    },
    timestamp: { type: 'string', example: '2019-01-01T00:00:00.000Z' },
    path: { type: 'string', example: '/developers/get' },
  },
};
