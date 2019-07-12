'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.addColumn('issues', 'statusId', {
          type: Sequelize.INTEGER
        }, { transaction: t })
      ])
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction((t) => {
      return Promise.all([
        queryInterface.removeColumn('issues', 'statusId', { transaction: t })
      ])
    });
  }
};
