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
  auth,
  uploadFile.single("logo"), validation(joiCategorySchema),
  controllerWrapper(CategoryController.addCategory)
);
router.get("/", auth, controllerWrapper(CategoryController.getAllCategories));

router.delete("/:categoryId", controllerWrapper(CategoryController.delCategory));


module.exports = router;
