const router = require('express').Router();
const Cards = require('../views/Cards');
// /home/home

router.route('/').get((req, res) => {
  res.renderComponent(Cards, { title: 'cards' });
});

module.exports = router;
