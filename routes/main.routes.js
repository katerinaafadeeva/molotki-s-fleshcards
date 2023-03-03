const router = require('express').Router();

router.route('/').get((req, res) => {
  res.redirect('/registration');
});

module.exports = router;
