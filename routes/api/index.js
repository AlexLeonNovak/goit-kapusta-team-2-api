const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/categories', require('./categories'));
// router.use('/balance', require('./balance'));


module.exports = router;
