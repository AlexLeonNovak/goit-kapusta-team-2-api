const express = require("express");
const router = express.Router();
const CategoryController = require("../../controllers/category");
const {
  validation,
  auth,
  controllerWrapper,
  uploadFile,
} = require("../../middlewares");
const {
  joiCategorySchema,
} = require("../../model/categories/validation/category");

router.post(
  "/",
  uploadFile.single("logo"), validation(joiCategorySchema),
  controllerWrapper(CategoryController.addCategory)
);
router.get("/",  controllerWrapper(CategoryController.getAllCategories));

module.exports = router;
