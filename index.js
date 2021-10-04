const express = require('express');

const app = express();

const adminRouter = require('./adminRouter');
const publicRouter = require('./publicRouter');

const log = (req, res, next) => {
    console.log('i am log in');
    next();
};
app.use(log);
app.use('/admin', adminRouter);
app.use('/', publicRouter);

app.listen(3000,() => {
    console.log('this port is running on server number 3000');
});

