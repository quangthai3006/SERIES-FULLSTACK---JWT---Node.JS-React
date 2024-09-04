"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          email: "a@gmail.com",
          password: "123456",
          username: "akl1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "aa@gmail.com",
          password: "123456",
          username: "akl2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "aaa@gmail.com",
          password: "123456",
          username: "akl3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
