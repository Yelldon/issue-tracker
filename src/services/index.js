const issues = require('./issues/issues.service.js');
const users = require('./users/users.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(issues);
  app.configure(users);
};
