const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
      context => {
        const User = context.app.services.users.Model;

        context.params.sequelize = {
            raw: false,
            include: [{
              model: User,
              as: 'user',
              attributes: ['firstname', 'lastname']
            }]
        }

        return context
      }
    ],
    find: [
      context => {

        let sort = context.params.query.sort
        context.params.query = {
          // $skip: context.params.query.$skip,
          $sort: {
            createdAt: parseInt(sort, 10)
          }
        }

        return context
      }
    ],
    get: [],
    create: [
      context => {
        context.data.userId = context.params.user.id

        return context;
      }
    ],
    update: [],
    patch: [],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      context => {
        context.result.message = `Successfully created issue ${context.result.id}`

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
