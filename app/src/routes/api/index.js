"use strict";

const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.proxy.search);

module.exports = router;