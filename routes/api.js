var express = require('express');
var router = express.Router()

const apiCochesRouter = require('./api/coches');

router.use('/coches', apiCochesRouter);

module.exports = router;