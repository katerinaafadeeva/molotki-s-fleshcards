const router = require('express').Router();
const Games = require('../views/Game');
const {
  questionsElbrus,
  questionsCats,
  questionsGeneral,
} = require('../quizInfo/questions');
const {
  answersElbrus,
  answersCats,
  answersGeneral,
} = require('../quizInfo/answers');
const { Game } = require('../db/models');

router
  .route('/elbrusLife/:id')
  .get((req, res) => {
    const { id } = req.params;
    const { questions: questionText } = questionsElbrus[id - 1];
    // console.log(questions);
    // const { params } =
    res.renderComponent(Games, {
      questionText,
      theme: 'elbrusLife',
      questionId: id,
    });
  })
  .post(async (req, res) => {
    const { id } = req.params;
    const { answers } = answersElbrus[id - 1];
    const userAnswer = req.body.answer;
    res.json({ id: +id + 1 });
    const score = questionsElbrus[id - 1].points;
    const result = await Game.findOne({ where: { id: 1 } });
    if (userAnswer === answers) {
      result.score += score;
      await Game.update({ score: result.score }, { where: { id: 1 } }); //id user
      console.log(result.score);
    }
    return result;
  });

router
  .route('/catslife/:id')
  .get((req, res) => {
    const { id } = req.params;
    const { questions: questionText } = questionsCats[id - 1];
    res.renderComponent(Games, {
      questionText,
      theme: 'catslife',
      questionId: id,
    });
  })
  .post(async (req, res) => {
    const { id } = req.params;
    const { answer } = answersCats[id - 1];
    const userAnswer = req.body.answer;
    res.json({ id: +id + 1 });
    const score = questionsCats[id - 1].points;
    const result = await Game.findOne({ where: { id: 1 } });

    if (userAnswer === answer) {
      result.score += score;
      await Game.update({ score: result.score }, { where: { id: 1 } }); //id user
      console.log(result.score);
    }
  });

router
  .route('/generallife/:id')
  .get((req, res) => {
    const { id } = req.params;
    const { questions: questionText } = questionsGeneral[id - 1];
    res.renderComponent(Games, {
      questionText,
      theme: 'generallife',
      questionId: id,
    });
  })
  .post(async (req, res) => {
    const { id } = req.params;
    const { answer } = answersGeneral[id - 1];
    const userAnswer = req.body.answer;
    res.json({ id: +id + 1 });
    const score = questionsGeneral[id - 1].points;
    const result = await Game.findOne({ where: { id: 1 } });
    if (userAnswer === answer) {
      result.score += score;
      await Game.update({ score: result.score }, { where: { id: 1 } }); //id user
      console.log(result.score);
    }
  });

module.exports = router;
