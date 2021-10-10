const express = require('express');
const router = express.Router();
const AuthController = require('../../controllers/auth');
const {validation, auth, controllerWrapper} = require('../../middlewares');
const {registrationAndLogin } = require('../../model/users/validation/auth');

router.post('/registration', validation(registrationAndLogin), controllerWrapper(AuthController.registration));
router.post('/login', validation(registrationAndLogin), controllerWrapper(AuthController.login));
router.get('/logout', auth, controllerWrapper(AuthController.logout));

router.post('/google', controllerWrapper(AuthController.google))

module.exports = router
