const issue = require('./issue/issue.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(issue);
};
