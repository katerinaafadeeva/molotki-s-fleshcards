const allAnswers = require('../../quizInfo/answers')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {

    const answers = await allAnswers.answersElbrus.map((el) => ({
      questionId: el.questionsId,
      answer: el.answers,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    const answers2 = await allAnswers.answersCats.map((el) => ({
      questionId: el.questionsId,
      answer: el.answers,
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  
    await queryInterface.bulkInsert('Answers', answers, answers2, {});
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('Answers');
  },
};