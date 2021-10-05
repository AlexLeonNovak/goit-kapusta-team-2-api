const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth');
const {auth, controllerWrapper} = require('../../middlewares');

router.patch('/:id', auth, controllerWrapper(AuthController.balance));

module.exports = router