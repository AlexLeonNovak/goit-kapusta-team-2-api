const express = require('express');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();
const {controllerWrapper} = require('../middlewares');
const pageController = require('../controllers/pages')

router.all('/', controllerWrapper(pageController.homePage));
router.use('/api/v1', require('./api'))

const swaggerDocument = require('../swagger/swagger.json');
router.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
