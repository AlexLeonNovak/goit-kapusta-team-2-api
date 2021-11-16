const CategoryRepo = require("../../repositories/category");

const delCategory = async (req, res) => {
  const { categoryId } = req.params;
  const category = await CategoryRepo.delCategory(categoryId);
  return res.OK({category});
};

module.exports = delCategory;
