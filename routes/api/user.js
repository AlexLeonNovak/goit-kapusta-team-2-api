const express = require('express');
const router = express.Router();
const UserController = require('../../controllers/user');
const {auth, controllerWrapper, validation} = require('../../middlewares');
const { updateBalance } = require('../../model/users/validation/updateBalance')

router.patch('/', auth, validation(updateBalance), controllerWrapper(UserController.balance));
router.get('/current', auth, controllerWrapper(UserController.currentUser));

module.exports = router;
