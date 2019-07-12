const issues = require('./issues/issues.service.js');
const users = require('./users/users.service.js');
const statuses = require('./statuses/statuses.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(issues);
  app.configure(users);
  app.configure(statuses);
};
