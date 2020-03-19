'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Rooms', 'deck_id', { type: Sequelize.STRING });

  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Rooms', 'deck_id', { type: Sequelize.STRING });

  }
};
