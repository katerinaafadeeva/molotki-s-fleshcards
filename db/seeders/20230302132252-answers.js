const allAnswers = require('../../quizInfo/answers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const answers = await allAnswers.map((el) => ({
      questionsId: el.questionsId,
      answers: el.answers,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Answers', answers, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Answers');
  },
};