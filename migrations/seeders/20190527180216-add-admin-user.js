'use strict';

const hash = require('@feathersjs/authentication-local/lib/utils/hash')

module.exports = {
  up: (queryInterface, Sequelize) => {
    let password;
    let passwordPromise = new Promise((resolve, reject) => {
      hash('secret').then((pass) => {
        password = pass;
        resolve();
      })
    });
    return Promise.all([passwordPromise]).then((values) => {
      return queryInterface.bulkInsert('users', [
          {
            username: 'admin',
              password,
              firstname: 'Admin',
              lastname: 'User',
              email: 'admin@example.com'
          },
        ], {});
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
