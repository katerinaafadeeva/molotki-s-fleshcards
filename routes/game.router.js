const router = require('express').Router();
const Game = require('../views/Game');
const questions = require('../quizInfo/questions');
const answers = require('../quizInfo/answers');

router
  .route('/elbrusLife/:id')
  .get((req, res) => {
    const { id } = req.params;
    const { question } = questions[id - 1];
    // const { params } =
    res.renderComponent(Game, {
      question,
      theme: 'elbrusLife',
      questionId: id,
    });
  })
  .post((req, res) => {
    console.log('hi');
    const { id } = req.params;
    const { answer } = answers[id - 1];
    const userAnswer = req.body.answer;
    // if (userAnswer === answer){

    // }
  });

router.route('/catslife').get((req, res) => {
  res.renderComponent(Game, { title: 'game' });
});

router.route('/generallife').get((req, res) => {
  res.renderComponent(Game, { title: 'game' });
});

module.exports = router;
