const router = require('express').Router();
const Game = require('../views/Game');
const questions = require('../quizInfo/questions');
const answers = require('../quizInfo/answers');

router
  .route('/elbrusLife/:id')
  .get((req, res) => {
    const { id } = req.params;
    const { questions: questionText } = questions[id - 1];
    // console.log(questions);
    // const { params } =
    res.renderComponent(Game, {
      questionText,
      theme: 'elbrusLife',
      questionId: id,
    });
  })
  .post((req, res) => {
    const { id } = req.params;
    const { answer } = answers[id - 1];
    const userAnswer = req.body.answer;
    res.json({ id: +id + 1 });
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
