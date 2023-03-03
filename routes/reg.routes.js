const router = require('express').Router();
const Home = require('../views/Home');
const { User } = require('../db/models');

router.route('/').get(async (req, res) => {
  const arrContacts = await User.findAll();
  // res.app.locals.user = 'ochko';
  res.renderComponent(Home, { title: 'Phone Book', arrContacts });
});

module.exports = router;
