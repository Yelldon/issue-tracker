const { authenticate } = require('@feathersjs/authentication').hooks;

module.exports = {
  before: {
    all: [
      authenticate('jwt'),
    ],
    find: [
      context => {
        const User = context.app.services.users.Model;
        const Status = context.app.services.statuses.Model;
        let sort = context.params.query.sort

        context.params.query = {
          // $skip: context.params.query.$skip,
          $sort: {
            createdAt: parseInt(sort, 10)
          }
        }

        context.params.sequelize = {
          raw: false,
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['firstname', 'lastname']
            },
            {
              model: Status,
              as: 'status',
              attributes: ['id', 'statusName', 'type']
            }
          ]
        }

        return context
      }
    ],
    get: [
      context => {
        const User = context.app.services.users.Model;
        const Status = context.app.services.statuses.Model;

        context.params.sequelize = {
          raw: false,
          include: [
            {
              model: User,
              as: 'user',
              attributes: ['firstname', 'lastname']
            },
            {
              model: Status,
              as: 'status',
              attributes: ['id', 'statusName', 'type']
            }
          ]
        }

        return context
      }
    ],
    create: [
      context => {
        context.data.userId = context.params.user.id
        context.data.statusId = context.data.status.id

        return context;
      }
    ],
    update: [
      context => {
        return context;
      }
    ],
    patch: [
      context => {
        return context
      }
    ],
    remove: []
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [
      context => {
        context.result.message = `Successfully created issue ${context.result.id}`
        context.service.emit('newIssue', {
          message: `Successfully created issue ${context.result.id}`,
          userId: context.result.userId
        })

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
