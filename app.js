require('@babel/register');

const express = require('express');
const logger = require('morgan');

const app = express();
const config = require('./config/config');
// const homeRouter = require('./routes/home.routes');
const mainRouter = require('./routes/main.routes');

const regRouter = require('./routes/reg.routes');

const cardRouter = require('./routes/card.routes');
const gameRouter = require('./routes/game.router');


const PORT = process.env.PORT ?? 3000;

config(app);

app.use(logger('dev'));

app.use('/', mainRouter);

app.use('/registration', regRouter);
// app.use('/home', homeRouter);

app.use('/home', homeRouter);

app.use('/cards', cardRouter);
app.use('/game', gameRouter);


app.listen(PORT, () => {
  console.log(`Server started at ${PORT} port`);
});
