// Write all your general swagger specification here so they can be imported to all swagger schemas.
const stringWithLimit = (min, max) => ({
  type: 'string',
  minLength: min,
  maxLength: max,
});

const integerWithLimit = (min, max) => ({
  type: 'integer',
  minimum: min,
  maximum: max,
});

const date = () => ({
  type: 'string',
  format: 'date',
});

// Definitions
const ValidationError = {
  type: 'object',
  properties: {
    status: {
      type: 'integer',
      format: 'int64',
    },
    name: {
      type: 'string',
    },
    data: {
      type: 'object',
    },
  },
  example: {
    name: 'ValidationError',
    status: 422,
    data: {
      object: {
        service_id: '1',
      },
      details: [
        {
          message: 'service_id length must be at least 5 characters long',
          type: 'string.min',
        },
      ],
    },
  },
};

const definitions = {
  ValidationError,
};

module.exports = {
  stringWithLimit,
  integerWithLimit,
  date,
  definitions,
};
