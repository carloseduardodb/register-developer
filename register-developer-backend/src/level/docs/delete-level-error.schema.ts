import { HttpStatus } from '@nestjs/common';

export default {
  name: 'delete-level-error',
  type: 'object',
  properties: {
    statusCode: {
      type: 'number',
      example: HttpStatus.NOT_FOUND,
    },
    error_details: {
      type: 'string',
      example: 'NotFoundException: Level not found. at...',
    },
    message: {
      type: 'string',
      example: 'Level not found.',
    },
    timestamp: {
      type: 'string',
      example: '2019-12-12T12:12:12.012Z',
    },
    path: {
      type: 'string',
      example: '/levels/delete/bc5a52d7-78a9-4f2e-a7df-16bd19de1f28',
    },
  },
};
