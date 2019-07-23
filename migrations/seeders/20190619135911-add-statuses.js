'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert('statuses', [
      {
        statusName: 'Open',
        default: true,
        type: 'start'
      },
      {
        statusName: 'Closed',
        default: false,
        type: 'finished'
      },
      {
        statusName: 'Complete',
        default: false,
        type: 'finished'
      },
      {
        statusName: 'In Progress',
        default: false,
        type: 'progress'
      },
      {
        statusName: 'Works As Expected',
        default: false,
        type: 'finished'
      },
      {
        statusName: 'Can\'t Reproduce',
        default: false,
        type: 'finished'
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('statuses', null, {});
  }
};
