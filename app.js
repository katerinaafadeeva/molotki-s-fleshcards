require('@babel/register');
const express = require('express');
const morgan = require('morgan');
// const path = require('path');
// const renderComponents = require('./middleware/renderComponent');
// const indexRouter = require('./routes/index.route');

const app = express();
const PORT = 3000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('HELLO WORLD');
});

app.listen(PORT, () => {
  console.log(`ПАШЕМ НА ${PORT} ПОРТУ КОНЕЧНО`);
});
