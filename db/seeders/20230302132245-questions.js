const allQuestions = require('../../quizInfo/questions');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questions = await allQuestions.map((el) => ({
      themesId: el.themesId,
      questions: el.questions,
      points: el.points,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    await queryInterface.bulkInsert('Questions', questions, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Questions');
  },
};

// коммент
