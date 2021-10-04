const express = require('express');

const publicRouter = express.Router();

const log = (req, res, next) => {
    console.log('I am loggin something!');
    next();
}

// the name of the first parameter must need to match with the /:blabla . its mandatory 
// publicRouter.param('user',(req, res, next, id) => {  req.user = id
// === '1'? 'admin' : 'Anonymous';  next(); });

publicRouter.param((param, option) => (req, res, next, value) => {
    if (value === option) {
        next();
    } else {
        res.sendStatus(403);
    }
});

publicRouter.param('user', '12')

publicRouter
            .route('/user')
            .get((req, res) => {
                res.send(`get`);
                // the req.user was coming from the publicRouter.param
            })
            .post((req, res) => {
                res.send(`post`);
                // the req.user was coming from the publicRouter.param
            })
            .put((req,res) => {
                res.send('put');
            })
            .delete((req,res) => {
                res.send('delete')
            })



publicRouter.get('/about', (req, res) => {
    res.send('about');
})

module.exports = publicRouter;