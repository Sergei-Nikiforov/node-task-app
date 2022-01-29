const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express(); // Creates Express

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

module.exports = app;
