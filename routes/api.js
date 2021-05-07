const router = require('express').Router();

const apiDvdRouter = require('./api/dvd');
const apiUsersRouter = require('./api/users');

router.use('/dvd', apiDvdRouter);
router.use('/users', apiUsersRouter);

module.exports = router;