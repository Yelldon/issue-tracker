// Initializes the `issues` service on path `/issues`
const createService = require('feathers-sequelize');
const createModel = require('../../models/issues.model');
const hooks = require('./issues.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate,
    events: [ 'newIssue' ]
  };

  // Initialize our service with any options it requires
  app.use('/issues', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('issues');

  service.hooks(hooks);
};
