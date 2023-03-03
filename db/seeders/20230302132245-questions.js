const allQuestions  = require('../../quizInfo/questions');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const questions = await allQuestions.questionsElbrus.map((el) => ({
      themeId: el.themesId,
      question: el.questions,
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
