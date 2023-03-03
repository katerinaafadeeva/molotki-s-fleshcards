const router = require('express').Router();
const Game = require('../views/Game');
const questions = require('../quizInfo/questions');

router.route('/elbrusLife/:id').get((req, res) => {
  const { id } = req.params;
  const { question } = questions[id - 1];
  // const { params } =
  res.renderComponent(Game, { question });
});

router.route('/catslife').get((req, res) => {
  res.renderComponent(Game, { title: 'game' });
});

router.route('/generallife').get((req, res) => {
  res.renderComponent(Game, { title: 'game' });
});

module.exports = router;
