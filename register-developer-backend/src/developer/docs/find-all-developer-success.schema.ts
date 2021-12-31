export default {
  type: 'object',
  properties: {
    statusCode: { type: 'number', example: 'success' },
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          developer_uuid: {
            type: 'string',
            example: '370274c6-c189-4fd3-b082-918a071efa6b',
          },
          name: { type: 'string', example: 'Carlos' },
          gender: { type: 'string', example: 'carlos@gmail.com' },
          birth_date: {
            type: 'string',
            example: '2019-01-01T00:00:00.000Z',
          },
          age: { type: 'number', example: '10' },
          hobby: { type: 'string', example: 'Comer' },
          level: {
            type: 'object',
            properties: {
              level_uuid: {
                type: 'string',
                example: '370274c6-c189-4fd3-b082-918a071efa6b',
              },
              name: { type: 'string', example: 'Senior' },
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
