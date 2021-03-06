const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth'));
router.use('/categories', require('./categories'));
router.use('/transactions', require('./transactions'));
router.use('/user', require('./user'));
router.use('/wallets', require('./wallets'));

module.exports = router;
