const express = require('express');
const swaggerUi = require('swagger-ui-express');
const router = express.Router();

router.use('/api/v1', require('./api'))

const swaggerDocument = require('../swagger/swagger.json');
router.use('/api-docs/v1', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

module.exports = router;
