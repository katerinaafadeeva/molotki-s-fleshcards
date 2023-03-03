const router = require('express').Router();
const { User } = require('../db/models');
// const CardReg = require('../views/CardReg');

router.route('/').post(async (req, res) => {
  const { name, phone, password } = req.body;

  if (name && phone && password) {
    const newContact = { name, phone, password };
    console.log(newContact);
    const newUser = await User.create(newContact);
    res.app.locals.user = { name: newUser.name, id: newUser.id };
    res.json({ message: 'ok' });
    // text/html
    // res.renderComponent(CardReg, { User: newContact }, { doctype: false });
  } else {
    res.status(400).json({ message: 'No data!' });
  }
});

module.exports = router;
