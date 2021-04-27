const router = require('express').Router();

const apiDvdRouter = require('./api/dvd');

router.use('/dvd', apiDvdRouter);

module.exports = router;