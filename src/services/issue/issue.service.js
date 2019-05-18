// Initializes the `issue` service on path `/issue`
const createService = require('feathers-sequelize');
const createModel = require('../../models/issue.model');
const hooks = require('./issue.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/issue', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('issue');
  service.find({
    query: {
      $sort: {
        createdAt: -1
      }
    }
  });

  service.hooks(hooks);
};
