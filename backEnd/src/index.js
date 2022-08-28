const express = require('express');
const morgan = require('morgan');
const taskRouts = require('./routes/task.routes');

const app = express();

app.listen(4000)
app.use(morgan('dev'))
app.use(taskRouts);
console.log('server port on 4000')