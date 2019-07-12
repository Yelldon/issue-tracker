'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('statuses', [
      {
        statusName: 'Open',
      },
      {
        statusName: 'Closed',
      },
      {
        statusName: 'Complete',
      },
      {
        statusName: 'In Progress',
      },
      {
        statusName: 'Works As Expected',
      },
      {
        statusName: 'Can\'t Reproduce' ,
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', null, {});
  }
};
