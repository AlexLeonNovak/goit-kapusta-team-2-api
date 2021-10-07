const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user');
const {auth, controllerWrapper} = require('../../middlewares');

router.patch('/', auth, controllerWrapper(UserController.balance));

module.exports = router