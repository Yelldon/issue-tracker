// Initializes the `statuses` service on path `/statuses`
const createService = require('feathers-sequelize');
const createModel = require('../../models/statuses.model');
const hooks = require('./statuses.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/statuses', createService(options));

  // Get our initialized service so that we can register hooks
  const service = app.service('statuses');

  service.hooks(hooks);
};
