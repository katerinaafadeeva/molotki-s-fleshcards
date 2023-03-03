const topics = require('../../quizInfo/topics');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const allTopics = await topics.map((el) => ({
      topic: el.topic,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Themes', allTopics, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Themes');
  },
};
