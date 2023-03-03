const router = require('express').Router();
const Cards = require('../views/Cards');
// /home/home

router.route('/').get((req, res) => {
  // console.log(res.app.locals);
  res.renderComponent(Cards, { title: 'cards' });
});

module.exports = router;
