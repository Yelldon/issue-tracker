const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [
      authenticate('jwt')
    ],
    find: [
      function(context) {
        let sort = context.params.query.sort
        context.params.query = {
          // $skip: context.params.query.$skip,
          $sort: {
            createdAt: parseInt(sort, 10)
          }
        }
        // console.log(context.params.query)
        return context
      }
    ],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      function(context) {
        // console.log(context.result)
        context.result.message = `Successfully created issue ${context.result.id}`
        console.log(context.result)
        return context
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
