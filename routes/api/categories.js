const express = require('express');
const router = express.Router();
const CategoryController = require('../../controllers/category');
const {validation, controllerWrapper} = require('../../middlewares');
const {joiCategorySchema } = require('../../model/categories/validation/category');

router.post('/', validation(joiCategorySchema), controllerWrapper(CategoryController.addCategory));
// router.get('/', auth, controllerWrapper(CategoryController.logout));

module.exports = router