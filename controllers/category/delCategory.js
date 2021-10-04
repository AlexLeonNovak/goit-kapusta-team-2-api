const CategoryRepo = require("../../repositories/category");

const delCategory = async (req, res, next) => {
  console.log(req.params);
  const { categoryId } = req.params;
  if (!categoryId) {
    return res.NOT_FOUND();
  }
  const category = await CategoryRepo.delCategory(categoryId);
  return res.NO_CONTENT({ category });
};

module.exports = delCategory;
