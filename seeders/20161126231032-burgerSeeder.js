'use strict';

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */
        return queryInterface.bulkInsert('Burgers', [{
                name: 'Cheese Burger',
                devoured: false,
                createdAt: Sequelize.fn('NOW'),
                updatedAt: Sequelize.fn('NOW')
            },
            {
                name: 'Veggie Burger',
                devoured: true,
                createdAt: Sequelize.fn('NOW'),
                updatedAt: Sequelize.fn('NOW')
            },
            {
                name: 'Big Mac',
                devoured: false,
                createdAt: Sequelize.fn('NOW'),
                updatedAt: Sequelize.fn('NOW')
            },
            {
                name: 'Double Decker',
                devoured: false,
                createdAt: Sequelize.fn('NOW'),
                updatedAt: Sequelize.fn('NOW')
            },
            {
                name: 'Double Veggie Burger',
                devoured: false,
                createdAt: Sequelize.fn('NOW'),
                updatedAt: Sequelize.fn('NOW')
            }
        ], {});
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example: */
        return queryInterface.bulkDelete('Burgers', null, {});

    }
};