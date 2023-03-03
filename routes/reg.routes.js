const router = require('express').Router();
const FormReg = require('../views/FormReg');
const { User } = require('../db/models');

router.route('/').get((req, res) => {
  const arrContacts = User.findAll();
  // res.app.locals.user = 'ochko';
  res.renderComponent(FormReg, { title: 'user', arrContacts });
});

router.route('/').post(async (req, res) => {
  const { name, phone, password } = req.body;

  if (name && phone && password) {
    const newContact = { name, phone, password };
    console.log(newContact);
    await User.create(newContact);
    res.app.locals.name = name;
    res.json({ message: 'ok' });
    // text/html
    // res.renderComponent(CardReg, { User: newContact }, { doctype: false });
  } else {
    res.status(400).json({ message: 'No data!' });
  }
});

module.exports = router;
