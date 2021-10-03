const express = require('express');
const router = express.Router();
const CategoryController = require('../../controllers/category');
const {validation, controllerWrapper, uploadFile} = require('../../middlewares');
const {joiCategorySchema } = require('../../model/categories/validation/category');

router.post('/', controllerWrapper(CategoryController.addCategory));
// router.get('/', auth, controllerWrapper(CategoryController.logout));
// router.patch('/:id', uploadFile.single("logo"), controllerWrapper(CategoryController.updateLogo));


module.exports = router