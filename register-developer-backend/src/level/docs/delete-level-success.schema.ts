import { HttpStatus } from '@nestjs/common';

export default {
  type: 'object',
  properties: {
    statusCode: { type: 'number', example: HttpStatus.OK },
    message: { type: 'string', example: 'Level successfully deleted' },
  },
};
