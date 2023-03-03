const router = require('express').Router();
const Home = require('../views/Home');
const { User } = require('../db/models');

router.route('/').get((req, res) => {
  const arrContacts = User.findAll();

  res.renderComponent(Home, { title: 'Bewers', arrContacts });
});

module.exports = router;
