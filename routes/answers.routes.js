const router = require('express').Router();
const Answers = require('../views/Answers');

// GET /answers
router.route('/').get((req, res) => {
  res.renderComponent(Answers, { title: 'Answers' });
});

module.exports = router;
