const CategoryRepo = require("../../repositories/category");

const delCategory = async (req, res) => {
  const { categoryId } = req.params;
  await CategoryRepo.delCategory(categoryId);
  return res.NoContent();
};

module.exports = delCategory;
