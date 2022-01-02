export default {
  type: 'object',
  properties: {
    statusCode: {
      type: 'number',
    },
    data: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          level_uuid: {
            type: 'string',
            example: '5f0b8f8f-c8e9-4f2e-b8c8-c8f8f8f8f8f8',
          },
          name: {
            type: 'string',
            example: 'Level 1',
          },
          level_id: {
            type: 'number',
            example: 1,
          },
        },
      },
    },
  },
};
