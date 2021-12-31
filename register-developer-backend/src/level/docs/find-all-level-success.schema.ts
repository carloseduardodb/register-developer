import { HttpStatus } from '@nestjs/common';

export default {
  type: 'object',
  properties: {
    statusCode: { type: 'number', example: HttpStatus.OK },
    data: {
      type: 'object',
      properties: {
        statusCode: { type: 'number', example: 'success' },
        data: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              level_uuid: {
                type: 'string',
                example: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
              },
              name: { type: 'string', example: 'Treinee' },
              developers: {
                type: 'array',
                items: {
                  type: 'object',
                  properties: {
                    developer_uuid: {
                      type: 'string',
                      example: 'bc5a52d7-78a9-4f2e-a5df-16bd19de1f28',
                    },
                    name: {
                      type: 'string',
                      example: '1995-12-17T05:24:00.000Z',
                    },
                    gender: { type: 'string', example: 'male' },
                    birth_date: {
                      type: 'string',
                      example: '1995-12-17T05:24:00.000Z',
                    },
                    age: { type: 'number', example: '5' },
                    hobby: { type: 'string', example: 'comer' },
                  },
                },
              },
            },
          },
        },
      },
    },
    count: { type: 'number', example: '10' },
    currentPage: { type: 'number', example: '1' },
    nextPage: { type: 'number', example: '1' },
    prevPage: { type: 'number', example: '1' },
    lastPage: { type: 'number', example: '1' },
  },
};
