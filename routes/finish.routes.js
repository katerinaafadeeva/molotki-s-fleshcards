const router = require('express').Router();
const Finish = require('../views/Finish');

// GET /finish
router.route('/').get((req, res) => {
  res.renderComponent(Finish, { contact: 'Bratan', score: 100 });
});

module.exports = router;
