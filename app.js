require('@babel/register');

const express = require('express');
const logger = require('morgan');
const app = express();
const config = require('./config/config');
const homeRouter = require('./routes/home.routes');
const mainRouter = require('./routes/main.routes');

const PORT = process.env.PORT ?? 3000;

config(app);

app.use(logger('dev'));

app.use('/', mainRouter);
app.use('/home', homeRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
